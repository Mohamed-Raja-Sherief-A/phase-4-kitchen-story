import { Component, Input, OnInit } from '@angular/core';
import { Productmodel } from 'src/app/interface/productmodel';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {
  @Input() product:Productmodel;
  image:any;
  constructor(private service:SessionService) { }

  ngOnInit(): void {
    this.image='data:image/jpeg;base64,' + this.product.img; 
  }
  cart(){
    this.service.addCart(this.product);
    alert("Product Added To Cart");
  }
}
