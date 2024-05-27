import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
   
  constructor(private http:HttpClient) { }

  // userData(){
  //    return [
  //     { name:'Anil', age:28 , email:'anil@gmail.com' },
  //     { name:'Sameera', age:50 , email:'sameera@gmail.com' },
  //     { name:'Veer', age:40 , email:'veer@gmail.com' },
  //    ]
  // }
  url = 'http://localhost:3000/posts';
  apiData(){
   return  this.http.get(this.url);
  }

  saveUserData(data:any){
    return this.http.post(this.url,data);
  }

}
