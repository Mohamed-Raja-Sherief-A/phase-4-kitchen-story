import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/classes/messages';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  logincheck:boolean=false;
  signupcheck:boolean=false;
  constructor() { }
  
  ngOnInit(): void {
  }
  loginCheck(value:boolean){
    this.logincheck=value;
  }
  signupCheck(value:boolean){
    this.signupcheck=value;
  }
  close(){
    if(this.logincheck||this.signupcheck){
    this.signupcheck=false;
    this.logincheck=false;
      console.log("click");
  }
    
  }
}
