import { Pipe, PipeTransform } from '@angular/core';
import { Productmodel } from '../interface/productmodel';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: Productmodel[], search?:string): unknown {
    if(search){
    return value.filter(product=>product.name.includes(search));
    }
    else{
      return value;
    }
  }

}
