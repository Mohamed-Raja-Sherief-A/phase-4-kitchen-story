import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/interface/productmodel';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-oneprod',
  templateUrl: './oneprod.component.html',
  styleUrls: ['./oneprod.component.scss']
})
export class OneprodComponent implements OnInit {
@Input() product:ProductModel;
image:any;
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.image='data:image/jpeg;base64,' + this.product.img;
  }
  //Add product to cart
  addToCart()
  {
    this.service.addCart(this.product);
    alert(`${this.product.name} is added to cart`)
  }
}
