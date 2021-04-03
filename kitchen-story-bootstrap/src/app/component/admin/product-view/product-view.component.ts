import { Component, OnInit } from '@angular/core';
import { Productmodel } from 'src/app/interface/productmodel';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  products:Productmodel[]=[];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      products=>this.products=products
    );
  }
  
}
