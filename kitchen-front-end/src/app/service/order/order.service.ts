import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/interface/ordermodel';
//order service , with api calls 
@Injectable({
  providedIn: 'root'
})
export class OrderService {
rootUrl:string=`http://localhost:6515/orders`;
  constructor(private http:HttpClient) { }
  addOrder(order:OrderModel):Observable<OrderModel>{
    return this.http.post<OrderModel>(this.rootUrl,order);
  }
}
