import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/interface/usermodel';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
password:string="";
session:string="";
user:UserModel;
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
//Recieves current user, updates password using api call
change(){
 this.service.userEmitter.subscribe(
   user=>this.session=user
 );
 this.user={username:this.session,password:this.password};
 this.service.postUser(this.user).subscribe(
   user=>this.user=user,
   err=>alert("couldnt update"),
   ()=>alert("password updated")
 );
}
}
