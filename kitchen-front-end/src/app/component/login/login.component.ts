import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/interface/usermodel';
import { UserService } from 'src/app/service/user/user.service';
//Login Component 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
username:string="";
password:string="";
user:UserModel;
check:any;
  constructor(private service:UserService,private route:Router) { }

  ngOnInit(): void {
  }
  //Login Check validation
  loginCheck(){
    this.service.checkCredentials(this.username,this.password).subscribe(
      user=>this.user=user,
      err=>alert("Invalid Username / Password"),
      ()=>{
        if(this.user!=null)
        {
          this.service.setSession(this.user.username);
          if(this.user.username==='Admin')
          {
          this.route.navigate(['/admin']);
          }
          else{
            this.route.navigate(['/shoppingCart']);
          }
        }
        else{
          alert("Invalid Username / Password");
        }
      }
    );
  }

  ngOnDestroy(){
    console.log("component destroyed");
    
  }
}
