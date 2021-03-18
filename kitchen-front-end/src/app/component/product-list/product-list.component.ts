import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/interface/productmodel';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
products:ProductModel[]=[];
  constructor(private service:ProductService) { }

  //Gets the list of products from back end
  ngOnInit(): void {
    this.service.getProducts().subscribe(
      products=>this.products=products,
      err=>alert("Cant retrieve products"),
      ()=>console.log("Retrieval completed")
    )
  }

}
