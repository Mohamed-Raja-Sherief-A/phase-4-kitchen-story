import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionService } from 'src/app/service/session/session.service';
import {Usermodel} from 'src/app/interface/usermodel';
import { RegistrationService } from 'src/app/service/registration/registration.service';
@Component({
  selector: 'app-admin-password',
  templateUrl: './admin-password.component.html',
  styleUrls: ['./admin-password.component.css']
})
export class AdminPasswordComponent implements OnInit {
  user:Usermodel;
  passwordForm:FormGroup=new FormGroup({
    oldpassword:new FormControl('',Validators.required),
    newpassword:new FormControl('',Validators.required),
    repassword:new FormControl('',Validators.required)
  });
  constructor(private session:SessionService,private service:RegistrationService) { }

  ngOnInit(): void {
    this.session.sessionUser.subscribe(
      user=>this.user=user
    );
    
  }
  submit(){
    if(this.user.password===this.passwordForm.get('oldpassword').value){
      this.user.password=this.passwordForm.get('repassword').value;
      this.service.updateUser(this.user).subscribe(
        ()=>alert("Password Updated Successfully")
      );
      this.passwordForm.reset();
    }
    else
    {
      alert("Invalid Old Password");
      this.passwordForm.reset();
    }
  }
}
