import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/interface/productmodel';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.scss']
})
export class ProductDetialsComponent implements OnInit {
@Input()product:ProductModel;
image:any;
  constructor(private service:ProductService,private route:Router) { }

  ngOnInit(): void {
    this.image='data:image/jpeg;base64,' + this.product.img; //Setting up image
  }
  //Updates The Product
  statusUpdate(status:string){

    this.product.status=status;
    this.service.updateService(this.product).subscribe(
      ()=>alert(`Updated ${this.product.name}`)
    );
 //   this.route.navigate(['/productList']);
  }
}
