import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-second-ex',
  templateUrl: './reactive-form-second-ex.component.html',
  styleUrls: ['./reactive-form-second-ex.component.css']
})
export class ReactiveFormSecondExComponent implements OnInit {

  constructor() { }

  reactiveForm:FormGroup;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      personalDetails: new FormGroup({
        firstname : new FormControl(null,[Validators.required,this.noSpaceAllowed]),
        lastname : new FormControl(null,Validators.required),
        email : new FormControl(null,[Validators.required,Validators.email])   
      }),
 
      gender : new FormControl('male'),
      country : new FormControl('india'),
      hobbies : new FormControl(null),
      skills : new FormArray([
         new FormControl(null,Validators.required),
        
      ])
    })
  }

  onSubmit(){
    console.log(this.reactiveForm)
  }

  get emailvalue(){
    return this.reactiveForm.get('personalDetails.email')  
  }

 get formarrayvalue(){
  return this.reactiveForm.get('skills') as FormArray;
 }

 

 addSkills(){
   (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required));
 }

 noSpaceAllowed(control:FormControl): { [key: string]: any } | null{

  const hasSpace = /\s/.test(control.value);
    if(hasSpace){
      return {'noSpaceAllowed':true};
    }

    return null;
 }
}
