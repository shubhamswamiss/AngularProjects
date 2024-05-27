import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // data = 10;
  // updateChild(){
  //   this.data = Math.floor(Math.random()*10);
  // }

  data = 10;
  updateChild(){
    this.data = Math.floor(Math.random()*10);
  }
}
