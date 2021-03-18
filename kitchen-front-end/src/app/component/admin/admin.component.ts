import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private service:UserService,private route:Router) { }

  ngOnInit(): void {
  }
  //Logout Method to set session empty
  logout(){
    this.service.setSession("");
    this.route.navigate(['/login']);
  }
}
