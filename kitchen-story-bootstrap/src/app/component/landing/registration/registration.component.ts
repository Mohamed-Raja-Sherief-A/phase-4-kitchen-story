import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usermodel } from 'src/app/interface/usermodel';


import { RegistrationService } from 'src/app/service/registration/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Output() registrationEmitter=new EventEmitter<boolean>();
  constructor(private myservice:RegistrationService) { }
  registrationForm=new FormGroup({
    username:new FormControl('' ,[Validators.required],this.myservice.userNameValidation()),
    password1:new FormControl('',[Validators.required]),
    password2:new FormControl('',[Validators.required])
  });
  get f(){
    return this.registrationForm.controls;
  }
  ngOnInit(): void {
  }
  loginSubmit(){
    let user:Usermodel={username:this.registrationForm.get('username').value,password:this.registrationForm.get('password2').value};
    this.myservice.addUser(user).subscribe(
      ()=>{alert("User Added Succesfully");this.registrationForm.reset();}
    );

  }
  close(){
    this.registrationEmitter.emit(false);
  }
}
