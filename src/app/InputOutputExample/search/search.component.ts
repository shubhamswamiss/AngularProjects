import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }

  searchValue:string='';

  @Output() 
  searchValueFilter : EventEmitter<string> = new EventEmitter<string>();

  changeSearchValue(){
    this.searchValueFilter.emit(this.searchValue);
   // console.log(this.searchValue);
  }


}
