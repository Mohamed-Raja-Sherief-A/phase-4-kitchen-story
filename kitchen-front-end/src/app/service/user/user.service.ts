import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OrderModel } from 'src/app/interface/ordermodel';
import { UserModel } from 'src/app/interface/usermodel';

//Users Service with api calls
@Injectable({
  providedIn: 'root'
})
export class UserService {
  rootUrl:string=`http://localhost:6515/users`;
  user:string="";
  userEmitter:BehaviorSubject<string>=new BehaviorSubject<string>(this.user);
  constructor(private http:HttpClient) { }
  
  createUser(user:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(this.rootUrl,user);
  }
  getUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.rootUrl);
  }
  getUser(username:string):Observable<UserModel>{
    
    return this.http.get<UserModel>(`${this.rootUrl}/${username}`);
  }
  postUser(user:UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(this.rootUrl,user);
  }
  setSession(username:string)
  {
    this.user=username;
    this.userEmitter.next(this.user);
  }
  checkCredentials(username:string,password:string):Observable<UserModel>{
    return this.http.get<UserModel>(`${this.rootUrl}/${username}/${password}`);
  }
  getOrders(username:string):Observable<OrderModel[]>{
    return this.http.get<OrderModel[]>(`${this.rootUrl}/${username}/product`);
  }
}
