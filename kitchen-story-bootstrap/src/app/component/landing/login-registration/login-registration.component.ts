import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {
  @Output() loginClickEvent=new EventEmitter<Boolean>();
  @Output() signupClickEvent=new EventEmitter<Boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  signUp(){
    this.signupClickEvent.emit(true);
  }
  logIn(){
    this.loginClickEvent.emit(true);
  }
}
