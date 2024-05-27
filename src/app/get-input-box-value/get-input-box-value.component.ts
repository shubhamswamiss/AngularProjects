import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-input-box-value',
  templateUrl: './get-input-box-value.component.html',
  styleUrls: ['./get-input-box-value.component.css']
})
export class GetInputBoxValueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValue:any;

  getInputBoxValu(val:any){
    this.inputValue =val;
    console.log(val);
  }
}
