import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataModel } from 'src/app/interface/DataModel';
import { ProductModel } from 'src/app/interface/productmodel';
//Product Service with api calls
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 rootUrl:string=`http://localhost:6515/products`;
 cart:ProductModel[]=[];
 //Custom Observable
 cartEmitter:BehaviorSubject<ProductModel[]>=new BehaviorSubject<ProductModel[]>(this.cart);
 data:DataModel;
  constructor(private http:HttpClient) { }

 addProduct(product:ProductModel,file:File):Observable<ProductModel>{
  const uploadData = new FormData();
  uploadData.append('img',file,file.name);
  uploadData.append('product',JSON.stringify(product));
 // this.data={product:product,file:uploadData};
   return this.http.post<ProductModel>(this.rootUrl,uploadData);
 }
 getProducts():Observable<ProductModel[]>{
   return this.http.get<ProductModel[]>(this.rootUrl);
 }
 updateService(product:ProductModel):Observable<ProductModel>{
   return this.http.put<ProductModel>(this.rootUrl,product);
 }
 addCart(product:ProductModel){
   this.cart.push(product);
   this.cartEmitter.next(this.cart);
 }
 popCart(i:number){

  this.cart.splice(i,1);
  this.cartEmitter.next(this.cart);
 }
 clearCart(){
   this.cart=[];
   this.cartEmitter.next(this.cart);
 }
}
