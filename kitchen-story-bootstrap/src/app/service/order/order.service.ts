import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordermodel } from 'src/app/interface/ordermodel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  rootUrl:string="http://localhost:9000/orders";
  constructor(private http:HttpClient) { }
  addOrder(order:Ordermodel):Observable<Ordermodel>{
    return this.http.post<Ordermodel>(this.rootUrl,order);
  }
}
