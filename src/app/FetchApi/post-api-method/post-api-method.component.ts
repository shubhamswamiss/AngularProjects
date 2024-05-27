import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/Services/user-data.service';
@Component({
  selector: 'app-post-api-method',
  templateUrl: './post-api-method.component.html',
  styleUrls: ['./post-api-method.component.css']
})
export class PostApiMethodComponent implements OnInit {

  constructor(private saveformdata:UserDataService) { }

  ngOnInit(): void {
  }
  title = 'Post API Method';

  getUserData(val:any){
    //console.log(val);
  
  this.saveformdata.saveUserData(val).subscribe((result)=>{
   console.log(result);
   })

  }



}
