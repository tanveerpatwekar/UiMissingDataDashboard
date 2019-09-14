import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedLevel;
  data:Array<Object> = [
      {id: 0, name: "store_no"},
      {id: 1, name: "coomp_no"}
  ];
  constructor() { }

  searchStore(value)
  {
    console.log(value);
    console.log(this.selectedLevel.name);
  }
  ngOnInit() {
  }

}