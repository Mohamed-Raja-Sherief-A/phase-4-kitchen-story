import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Productmodel } from 'src/app/interface/productmodel';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  selectedFile:File;

  productForm:FormGroup=new FormGroup({
    name:new FormControl('',Validators.required),
    amount:new FormControl('',[Validators.required,Validators.min(1)]),
    file:new FormControl('',Validators.required)
  });

  constructor(private service:ProductService) { }

  ngOnInit(): void {
  }
  productSubmit(){
    let product:Productmodel={
    pid:+0,
    amount:+this.productForm.get('amount').value,
    name:this.productForm.get('name').value,
    img:'',
    status:'Active'
  };
    this.service.addProducts(product,this.selectedFile).subscribe(
      ()=>{alert("Product Added Successfully");this.productForm.reset()}
    );
  }
  onFileChanged(event:any){
    this.selectedFile=event.target.files[0];
  }
}
