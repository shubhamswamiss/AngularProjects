import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title = 'Style Binding';
  color = 'red';  
  bgColor = 'yellow';

  updateColor(){
    this.color = 'green';
    this.bgColor = 'black';
  }
}
