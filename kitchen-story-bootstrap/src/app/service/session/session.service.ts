import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Productmodel } from 'src/app/interface/productmodel';
import { Usermodel } from 'src/app/interface/usermodel';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
 user:Usermodel=null;
 carts:Productmodel[]=[];
 amount:number=0;
 sessionUser:BehaviorSubject<Usermodel>=new BehaviorSubject<Usermodel>(this.user);
 sessionCart:BehaviorSubject<Productmodel[]>=new BehaviorSubject<Productmodel[]>(this.carts);
 cartAmmount:BehaviorSubject<number>=new BehaviorSubject<number>(this.amount);
  constructor() { }
 addSession(user:Usermodel){
   this.sessionUser.next(user);
 }
 addCart(product:Productmodel){
   this.carts.push(product);
   this.sessionCart.next(this.carts);
 }
 deleteItem(i:number){
   this.carts.splice(i,1);
   this.sessionCart.next(this.carts);
 }
 deleteCart(){
  this.sessionCart.next([]);
 }
}
