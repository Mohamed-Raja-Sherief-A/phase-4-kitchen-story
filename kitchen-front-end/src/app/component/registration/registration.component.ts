import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/interface/usermodel';


import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
username:string="";
password:string="";
user:UserModel;
message:string="";
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
  //Post new user to back end
  onSubmit():void{
    this.user={username:this.username,password:this.password};
    this.service.createUser(this.user).subscribe(
      user=>this.user=user,
      err=>alert("User name already exists"),
      ()=> alert("Succesfully added user")
    );
  }
}
