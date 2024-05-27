import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  constructor() { }
   
  parentMessage:string = 'this is string from parent';
  msgFromChild:string;
  msgFromChild2:string;
  ngOnInit(): void {
  }

  receiveMsg(item:string){
     this.msgFromChild = item; 
  }

  receiveMsg2(item:string){
    this.msgFromChild2 = item;
  }


}