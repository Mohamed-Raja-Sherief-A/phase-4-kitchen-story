import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/interface/productmodel';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:ProductModel[]=[];
  @Input() search:string;
  constructor(private service:ProductService) { }
  //Fetches Product List
  ngOnInit(): void {
    this.service.getProducts().subscribe(
      products=>this.products=products,
      err=>alert("Cant retrieve products"),
      ()=>console.log("Retrieval completed")
    )
  }

}
