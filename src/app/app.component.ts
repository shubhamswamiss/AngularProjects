import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPractice';
  today:string = "pipes in angular";
  todayData:Date = new Date();
  value:number = 1000;
  user = {
    name :'user',
    email : 'user@gmail.com'
  }
  constructor(private viewContainer:ViewContainerRef,private cfr:ComponentFactoryResolver) { } 
  

  getName(firstName:string,lastName:string){
    alert('First Name is'+' '+firstName +' '+'And LastName is'+' '+lastName);
   

    
  }

  async loadAdmin(){
   this.viewContainer.clear();
   const {AdminlistComponent} = await import('./LazyLoadingComponent/adminlist/adminlist.component')
   this.viewContainer.createComponent(
    this.cfr.resolveComponentFactory(AdminlistComponent)
   )
  }

  async loadUser(){
  this.viewContainer.clear();
  const {UserlistComponent} = await import('./LazyLoadingComponent/userlist/userlist.component')
  this.viewContainer.createComponent(
    this.cfr.resolveComponentFactory(UserlistComponent)
  )
  }


   
}
