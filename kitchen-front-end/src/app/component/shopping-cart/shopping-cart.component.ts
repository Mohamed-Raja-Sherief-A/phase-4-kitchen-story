import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product/product.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  search:string="";
  constructor(private service:UserService,private productservice:ProductService,private route:Router) { }

  ngOnInit(): void {
  }
  //Logout 
  logout(){
    this.service.setSession("");
    this.productservice.clearCart();
    this.route.navigate(['/login']);
  }
  //Shows Cart
  cart(){
    this.route.navigate(['/cart']);
  }
}
