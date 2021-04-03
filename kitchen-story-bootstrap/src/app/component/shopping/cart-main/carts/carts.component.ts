import { Component, OnInit } from '@angular/core';
import { Productmodel } from 'src/app/interface/productmodel';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  carts:Productmodel[];
  amount:number=0;
  constructor(private service:SessionService) { }

  ngOnInit(): void {
    this.service.sessionCart.subscribe(
      carts=>{this.carts=carts;
        this.amount=0;
        for(let cart of this.carts)
        {
        this.amount+=cart.amount;
        console.log("Hi");
        }
      
      }
    );
    
  }
  delete(i:number){
    this.service.deleteItem(i);
  }

}
