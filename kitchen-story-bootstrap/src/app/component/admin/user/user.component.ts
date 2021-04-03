import { Component, OnInit } from '@angular/core';
import { Productmodel } from 'src/app/interface/productmodel';
import { Usermodel } from 'src/app/interface/usermodel';
import { RegistrationService } from 'src/app/service/registration/registration.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users:Usermodel[]=[];
  products:Productmodel[]=[];
  constructor(private service:RegistrationService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      users=>this.users=users
    );
   
  }
  myOrders(event){
    this.products=[];
    this.service.getProducts(event.target.value).subscribe(
      orders=>{
        for(let order of orders){
          this.products.push(order.product);
        }
      }
    );
  }
}
