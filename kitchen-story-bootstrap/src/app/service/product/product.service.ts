import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productmodel } from 'src/app/interface/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  rootUrl:string=`http://localhost:9000/products`;

  constructor(private http:HttpClient) { }
  
  addProducts(product:Productmodel,file:File){
  const uploadData = new FormData();
  uploadData.append('img',file,file.name);
  uploadData.append('product',JSON.stringify(product));
 // this.data={product:product,file:uploadData};
   return this.http.post<Productmodel>(this.rootUrl,uploadData);
  }

  getProducts():Observable<Productmodel[]>{
    return this.http.get<Productmodel[]>(this.rootUrl);
  }
  updateProduct(product:Productmodel):Observable<Productmodel>{
    return this.http.put<Productmodel>(this.rootUrl,product);
  }
  getProduct(id:number):Observable<Productmodel>{
   
    return this.http.get<Productmodel>(`${this.rootUrl}/${id}`);
  }
}
