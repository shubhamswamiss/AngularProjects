import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifexample',
  templateUrl: './ngifexample.component.html',
  styleUrls: ['./ngifexample.component.css']
})
export class NgifexampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show=false;
  secondVal = '';

}
