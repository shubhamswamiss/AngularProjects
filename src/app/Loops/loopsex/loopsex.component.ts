import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loopsex',
  templateUrl: './loopsex.component.html',
  styleUrls: ['./loopsex.component.css']
})
export class LoopsexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  title = "For Loop"
  users = ['Anil','Omkar','Sidhu','Rohan','Ashitosh'];
  userDetails = [
    {name :'Anil' , email : 'anil@123gmail.com' , phone : '12345'},
    {name :'Peter' , email : 'peter@123gmail.com' , phone : '456321'},
    {name :'Alex' , email : 'alex@123gmail.com' , phone : '256314'},
    {name :'Tukaram' , email : 'tukaram@123gmail.com' , phone : '789654'},
 ];
}
