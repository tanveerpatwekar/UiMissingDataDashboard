import { Component, OnInit } from '@angular/core';
import {MidataserviceService} from '../../services/midataservice.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  public stores = []


  constructor( private service: MidataserviceService){
   }

  ngOnInit() {
    this.service.getAllStores().subscribe(data=>this.stores=data);
  }
}