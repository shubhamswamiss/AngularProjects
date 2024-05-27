import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-ex',
  templateUrl: './toggle-ex.component.html',
  styleUrls: ['./toggle-ex.component.css']
})
export class ToggleExComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Toggle Element'
  display = false;
  toggleEle(){
    this.display = !this.display;
  }

}
