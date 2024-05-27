import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/Services/user-data.service';
@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrls: ['./fetch-api.component.css']
})
export class FetchApiComponent implements OnInit {
   val:any
  constructor(private data : UserDataService) { 
    this.data.apiData().subscribe((fetchdata)=> {
      console.log(fetchdata);
      this.val = fetchdata;
    })
  }

  ngOnInit(): void {
  }

}
