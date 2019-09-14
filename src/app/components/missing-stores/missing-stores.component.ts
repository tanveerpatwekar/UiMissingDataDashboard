import { Component, OnInit } from '@angular/core';
import {MidataserviceService} from '../../services/midataservice.service';

@Component({
  selector: 'app-missing-stores',
  templateUrl: './missing-stores.component.html',
  styleUrls: ['./missing-stores.component.css']
})
export class MissingStoresComponent implements OnInit {

  public missingStores = []

  constructor(private service: MidataserviceService) {

   }

  ngOnInit() {
    this.service.getAllMissingStore().subscribe(data=>this.missingStores=data);
  }
}