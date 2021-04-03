import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usermodel } from 'src/app/interface/usermodel';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private route:Router,private session:SessionService) { }

  ngOnInit(): void {
  }
  logout(){
    let user:Usermodel={username:"",password:""};
    this.session.addSession(user);
    this.route.navigate(['']);
  }
}
