import { Component, OnInit } from '@angular/core';
import { Productmodel } from 'src/app/interface/productmodel';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  search:string="";
  products:Productmodel[];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      products=>this.products=products.filter((product)=>product.status==='Active')
    );
  }

}
