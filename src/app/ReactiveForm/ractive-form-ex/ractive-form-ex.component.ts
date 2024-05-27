import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-ractive-form-ex',
  templateUrl: './ractive-form-ex.component.html',
  styleUrls: ['./ractive-form-ex.component.css']
})
export class RactiveFormExComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.loginForm.setValue({
      user:'abc',
      password:'abc@123'
    })
   } 

  title = 'Reactive Form';

  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  loginUser(){
    console.warn(this.loginForm);
    console.log("hello")
  }

  get userInputField(){
    return this.loginForm.get('user');
  }

  get password(){
    return this.loginForm.get('password');
  }
  



}
