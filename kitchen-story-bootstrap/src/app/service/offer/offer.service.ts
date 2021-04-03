import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/interface/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  rootUrl:string="http://localhost:9000/offers";
  constructor(private http:HttpClient) { }
  addOffer(offer:Offer):Observable<Offer>{
    return this.http.post<Offer>(this.rootUrl,offer);
  }
  getOffers():Observable<Offer[]>{
    return this.http.get<Offer[]>(this.rootUrl);
  }
  deleteOffer(id:number):Observable<Offer>{
    return this.http.delete<Offer>(`${this.rootUrl}/${id}`)
  }
}
