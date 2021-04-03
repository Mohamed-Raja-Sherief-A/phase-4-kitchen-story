import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Offer } from 'src/app/interface/offer';
import { OfferService } from 'src/app/service/offer/offer.service';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.css']
})
export class OfferAddComponent implements OnInit {
  offerForm:FormGroup=new FormGroup({
    code:new FormControl('',Validators.required),
    offer:new FormControl('',[Validators.required,Validators.min(1)])
  });
  constructor(private service:OfferService) { }

  ngOnInit(): void {
  }
  submit(){
    let offer:Offer={
      oid:+0,
      code:this.offerForm.get('code').value,
      offer:this.offerForm.get('offer').value
    }
    this.service.addOffer(offer).subscribe(
      ()=>{alert("Offer Added Succesfully");
      this.offerForm.reset();
      }
    );
  }
}
