import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses = [
    {id:101,name:'Javascript For Biginers',author:'jonh heikela',
    duration:40,type:'free',price:0.00,rating:4.5,img:'/assets/javascript.png',
    disc:'in this course you will learn javascript'
   },
    {id:102,name:'Angular For Biginers',author:'Sameer choughule',
    duration:42,type:'free',price:0.00,rating:4.5,img:'/assets/Angular.png',
    disc:'in this course you will learn Angular'
    },
    {id:103,name:'React For Biginers Course',author:'Bhau Kadam',
    duration:23,type:'free',price:0.00,rating:4.5,img:'/assets/React.png',
    disc:'in this course you will learn React'
    },
    {id:104,name:'Advance Angular Course',author:'omkar Bhojne',
    duration:54,type:'Premium',price:129.00,rating:4.7,img:'/assets/AngularAdvance.png',
    disc:'in this course you will learn Advance Angular'
    },
    {id:105,name:' Advance Javascript Course',author:'Dattu More',
    duration:33,type:'Premium',price:300,rating:4.9,img:'/assets/JavaScriptAdvance.jpg',
    disc:'in this course you will learn  Advance javascript'
    },
    {id:106,name:'Advance React Course',author:'sagar Karande',
    duration:96,type:'Premium',price:700,rating:4.9,img:'/assets/react-Advance.png',
    disc:'in this course you will learn Advance React'
    }
  ]

  getAllCourses(){
   return this.courses.length;
  }

  getFreeCourses(){
   return this.courses.filter(course=>course.type === 'free').length;
  }

  getPremiumCourses(){
  return this.courses.filter(course=>course.type === 'Premium').length;
  }

  filterData:string='all';

  getFilterDataFromChild(val:any){
   this.filterData = val;
  //  console.log(this.filterData);
  }

    inputSearchValue:string='';

  getSearchValueData(val:any){
     this.inputSearchValue = val;
  }

}
