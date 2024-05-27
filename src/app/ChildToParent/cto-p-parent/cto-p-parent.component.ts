import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cto-p-parent',
  templateUrl: './cto-p-parent.component.html',
  styleUrls: ['./cto-p-parent.component.css']
})
export class CToPParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data:string = 'child to parent';
  
  updateData(item:string){
    console.warn(item);
    this.data = item;
  }

}
