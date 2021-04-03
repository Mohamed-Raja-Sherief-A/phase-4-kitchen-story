import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Usermodel } from 'src/app/interface/usermodel';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-shopping-nav',
  templateUrl: './shopping-nav.component.html',
  styleUrls: ['./shopping-nav.component.css']
})
export class ShoppingNavComponent implements OnInit {
  cartSize:number=0;
  constructor(private session:SessionService,private route:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.session.sessionCart.subscribe(
      carts=>this.cartSize=carts.length
    );
  }
  logout(){
    let user:Usermodel={username:"",password:""};
    this.session.addSession(user);
    this.session.deleteCart();
    this.route.navigate(['']);
  }
  checkout(){
    this.route.navigate(['CheckOut'],{relativeTo:this.active.parent});
  }
}
