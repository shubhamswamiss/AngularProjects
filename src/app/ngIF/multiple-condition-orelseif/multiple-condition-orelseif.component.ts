import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-condition-orelseif',
  templateUrl: './multiple-condition-orelseif.component.html',
  styleUrls: ['./multiple-condition-orelseif.component.css']
})
export class MultipleConditionOrelseifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color='blue';
  changeColor:string;

  chagneValue(val:string){
    this.changeColor = val;
    this.color = val;
  }
}
