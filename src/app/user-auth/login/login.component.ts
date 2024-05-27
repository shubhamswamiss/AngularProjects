import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputBoxVal:any;
  inputBoxVal1:any;
  inputBoxVal2:any;
  inputBoxVal3:any;


  getkeyUpEventData(val:any){
    this.inputBoxVal = val; 
    console.log(val);
  }

  getkeyDownEventData(val:any){
    this.inputBoxVal1 = val; 
    console.log(val);
  }
  getblurEventData(val:any){
     this.inputBoxVal2 = val;
     console.log(val)
  }

  getinputEventData(val:any){
    this.inputBoxVal3 = val;
    console.log(val);
  }

  getmouseoverEventData(val:any){
    console.warn(val);
  }

  getmouseleaveEventData(val:any){
    console.log(val);
  }
}
