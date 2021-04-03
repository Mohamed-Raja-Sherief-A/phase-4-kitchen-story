import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/classes/messages';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.css']
})
export class CustomCarouselComponent implements OnInit {
  messages:Messages[]=[
    new Messages("Speed Grocery Delivery","We are here"),
    new Messages("Unexpected guests ?","We got it covered"),
    new Messages("Want to try a new recipe ?","We got you covered"),
    new Messages("Any time / Any Day","We are just a click away to get your groceries in time"),
    new Messages("Discounts","We got you covered for each order above 1000 Rs")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
