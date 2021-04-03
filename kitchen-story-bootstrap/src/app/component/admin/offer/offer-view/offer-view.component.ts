import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Offer } from 'src/app/interface/offer';
import { OfferService } from 'src/app/service/offer/offer.service';

@Component({
  selector: 'app-offer-view',
  templateUrl: './offer-view.component.html',
  styleUrls: ['./offer-view.component.css']
})
export class OfferViewComponent implements OnInit {
  @Input() result:boolean=false;
  offers:Offer[];
  constructor(private service:OfferService) { }

  ngOnInit(): void {
    this.service.getOffers().subscribe(
      offers=>this.offers=offers
    );
    }
    refresh(){
      this.ngOnInit();
    }
    delete(id:number){
      this.service.deleteOffer(this.offers[id].oid).subscribe(
        ()=>{alert("Deleted Successfully");this.ngOnInit();}
      );
    }
  }

