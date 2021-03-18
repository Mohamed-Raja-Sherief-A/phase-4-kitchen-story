import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/interface/ordermodel';
import { ProductModel } from 'src/app/interface/productmodel';
import { UserModel } from 'src/app/interface/usermodel';
import { OrderService } from 'src/app/service/order/order.service';
import { ProductService } from 'src/app/service/product/product.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
carts:ProductModel[]=[];
username:string="";
user:UserModel;
order:OrderModel;
  constructor(private service:ProductService,private userservice:UserService,private orderservice:OrderService) { }
  //Gets the content of cart , current user, and the user details from back end
  ngOnInit(): void {
    this.service.cartEmitter.subscribe(
      cart=>this.carts=cart
    );
    this.userservice.userEmitter.subscribe(
      username=>this.username=username
    );
    this.userservice.getUser(this.username).subscribe(
      user=>this.user=user
    );
  }
  //checks out the cart
  checkOut(){
    if(this.carts.length===0){alert("Cart is Empty");
    }else{
    for(let cart of this.carts){
      this.order={oid:0,user:this.user,product:cart};
      this.orderservice.addOrder(this.order).subscribe(
       
      );
    
    }
    alert("CheckOut Succesfull");
  }

  }

}
