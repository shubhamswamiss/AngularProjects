import { Component, OnInit,EventEmitter, Output,Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

@Input()  all:number=0;
@Input()  free:number=0;
@Input()  premium:number =0;


  constructor() { }

  ngOnInit(): void {
  }

  saveDataOfFilter:string ='all';

  @Output() 
  filterDataChangeEvent : EventEmitter<string> = new EventEmitter<string>();

  changeFilterData(){
    this.filterDataChangeEvent.emit(this.saveDataOfFilter);
  //  console.log(this.saveDataOfFilter);
  }
}
