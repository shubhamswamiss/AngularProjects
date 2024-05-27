import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/Services/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  serviceData:any;
  // constructor(private data : UserDataService) { 
  //   console.log('userData', data.userData());
  //    this.serviceData = data.userData();
  // }

  constructor(private user : UserDataService){
      user.apiData().subscribe((data)=>{
      
        console.log(data)
         this.serviceData = data
      });

       
    
  }

  ngOnInit(): void {
  }

}
