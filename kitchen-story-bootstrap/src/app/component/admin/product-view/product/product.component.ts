import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productmodel } from 'src/app/interface/productmodel';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product:Productmodel;
  image:any;
  constructor(private service:ProductService , private routes:Router , private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.image='data:image/jpeg;base64,' + this.product.img; 
  }
  enable(){
   if(confirm("Are you sure you want to update"))
   {
    this.product.status="Active";
    this.service.updateProduct(this.product).subscribe(
      ()=>alert(`${this.product.name} is updated to Active`)
    );
    }
  }
  disable(){
    if(confirm("Are you sure you want to update"))
   {
    this.product.status="InActive";
    this.service.updateProduct(this.product).subscribe(
      ()=>alert(`${this.product.name} is updated to InActive`)
    );
   }
  }
  edit(){
    this.routes.navigate(['ProductEdit',this.product.pid],{relativeTo:this.active.parent})
  }
}
