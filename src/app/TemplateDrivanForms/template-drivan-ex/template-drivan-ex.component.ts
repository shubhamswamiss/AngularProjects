import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-drivan-ex',
  templateUrl: './template-drivan-ex.component.html',
  styleUrls: ['./template-drivan-ex.component.css']
})
export class TemplateDrivanExComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstname!:string;
  lastname!:string;
  email!:string;
  gen!:string;
  country!:string;
  @ViewChild('myForm') form!: NgForm;
  defaultCountry = 'india';
  defaultGender = 'Female';
  
  gender = [
    {id:'1', value:'Male'},
    {id:'2', value:'Female'},
    {id:'3', value:'Other'}
  ]
  


  onSubmit(){
    console.log(this.form);

    this.firstname = this.form.value.combinefields.firstname;
    this.lastname = this.form.value.combinefields.lastname;
    this.email = this.form.value.combinefields.email;
    this.country = this.form.value.country;
    this.gen = this.form.value.gender;
     
    // Reset Form
     this.form.reset();
  }

  setDefaultValues(){
    this.form.form.patchValue({
      combinefields: {
        firstname: 'John',
        lastname: 'Smith',
        email : 'abc@gmail.com'
      }
    })
      
    
  }

}
