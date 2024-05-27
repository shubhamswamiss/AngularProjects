import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cto-p-child',
  templateUrl: './cto-p-child.component.html',
  styleUrls: ['./cto-p-child.component.css']
})
export class CToPChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() updateDataEvent = new EventEmitter<string>();

}
