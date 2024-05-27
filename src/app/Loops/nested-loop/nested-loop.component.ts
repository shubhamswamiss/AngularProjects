import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-loop',
  templateUrl: './nested-loop.component.html',
  styleUrls: ['./nested-loop.component.css']
})
export class NestedLoopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Nested ForLoop";
  users = [ 
    {name:'Anil',phone:'1111',socialAccounts:['facebook','insta','gmail']},
    {name:'Sam',phone:'2222',socialAccounts:['facebook','insta','gmail']},
    {name:'Veer',phone:'3333',socialAccounts:['facebook','insta','gmail']},
    {name:'Aleena',phone:'4444',socialAccounts:['facebook','insta','gmail']},


  ]

}
