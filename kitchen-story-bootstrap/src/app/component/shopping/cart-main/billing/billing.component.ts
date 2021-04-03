import { Component, OnInit } from '@angular/core';
import { Ordermodel } from 'src/app/interface/ordermodel';
import { Productmodel } from 'src/app/interface/productmodel';
import { Usermodel } from 'src/app/interface/usermodel';
import { OrderService } from 'src/app/service/order/order.service';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  user:Usermodel;
  cart:Productmodel[];
  constructor(private session:SessionService,private service:OrderService) { }

  ngOnInit(): void {
  }
  checkOut(){
    this.session.sessionUser.subscribe(
      user=>this.user=user
    );
    this.session.sessionCart.subscribe(
      carts=>this.cart=carts
    );
    for(let cart of this.cart){
      let order:Ordermodel={
        oid:+0,
        product:cart,
        user:this.user
      }
      this.service.addOrder(order).subscribe( 
      );
    }
    alert("Check Out Complete");
  }
}
