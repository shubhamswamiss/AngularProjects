import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  constructor() { }

  @Input()  message:string ;
  @Output() messageEvent = new EventEmitter<string>();
  @Output() secondEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit(" Hello from child ");
  }
  
  ngOnInit(): void {
  }

  secondFunction(){
    this.secondEvent.emit("This is second msg from child");
  }

}
