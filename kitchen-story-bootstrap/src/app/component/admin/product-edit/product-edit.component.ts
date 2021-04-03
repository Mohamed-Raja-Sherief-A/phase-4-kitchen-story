import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { Productmodel } from 'src/app/interface/productmodel';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id:number;
  image:any;
  product:Productmodel;
  productForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required]),
        amount:new FormControl('',[Validators.required,Validators.min(1)])
  });
  constructor(private route:ActivatedRoute,private service:ProductService,private main:Router) { }

  ngOnInit(): void {
    
    
    this.route.params.subscribe((params)=>{
      this.id=params['id']
    });
 
    this.service.getProduct(this.id).subscribe(
      product=>{
        this.product=product;
        this.productForm.setValue({
        name:product.name,
        amount:product.amount
      });
      this.image='data:image/jpeg;base64,' + product.img; 
    }
    );
  }
  update(){
    this.product.name=this.productForm.get('name').value;
    this.product.amount=this.productForm.get('amount').value;
    this.service.updateProduct(this.product).subscribe(
      ()=>alert("Product updated Successfully")
    );
  }
  back(){
    this.main.navigate(['ProductView'],{relativeTo:this.route.parent})
  }

}
