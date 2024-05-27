import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent implements OnInit {
  
  title = 'Counter App'
  constructor() { }

  ngOnInit(): void {
  }

  count = 0;
  counter(type:string){
    type === 'add' ? this.count++ : this.count-- ;
  }

}
