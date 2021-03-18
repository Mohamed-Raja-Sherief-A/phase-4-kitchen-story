import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/interface/productmodel';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
name:string="";
amount:number=0;
product:ProductModel;
selectedFile:File;
  constructor(private service:ProductService) { }

  ngOnInit(): void {
  }
  //Adds product to back end with api call
addProduct(){
  this.product={
    pid:0,
    name:this.name,
    amount:+this.amount,
    img:"",
    status:'Active'
  }
  this.service.addProduct(this.product,this.selectedFile).subscribe(
    product=>this.product=product,
    err=>console.log("Couldnt add product"),
    ()=>{alert("Product added successfully");}
  );
}
onFileChanged(event:any){
  this.selectedFile=event.target.files[0];
}
}
