import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usermodel } from 'src/app/interface/usermodel';
import { RegistrationService } from 'src/app/service/registration/registration.service';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginEmitter=new EventEmitter<boolean>();
  loginForm=new FormGroup({
    username:new FormControl('' ,[Validators.required]),
    password:new FormControl('',[Validators.required])
  });
  user:Usermodel;
  constructor(private router:Router,private service:RegistrationService,private session:SessionService) { }

  ngOnInit(): void {
  }
  loginSubmit(){
   this.service.checkUser(this.loginForm.get('username').value,this.loginForm.get('password').value).subscribe(
    user=>this.user=user,
    err=>console.log("error"),
    ()=>{
      if(this.user){
      this.session.addSession(this.user);
      if(this.user.username==='Admin'){
      this.router.navigate(['/Admin']);
      }
      else{
        this.router.navigate(['/Shopping']);
      }
      }
      else{
        alert("Invalid Username / Password");
        this.loginForm.reset();
      }
    }
   );
  }
  close(){
    this.loginEmitter.emit(false);
  }
}
