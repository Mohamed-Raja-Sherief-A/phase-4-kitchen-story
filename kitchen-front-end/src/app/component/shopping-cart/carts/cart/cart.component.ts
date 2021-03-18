import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/interface/productmodel';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
@Input() cart:ProductModel;
@Input() i:number;
  constructor(private service:ProductService) { }

  ngOnInit(): void {
  }
  deleteItem()
  {
    this.service.popCart(this.i);
  }
}
