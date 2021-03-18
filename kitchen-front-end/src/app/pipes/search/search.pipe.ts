import { Input, Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from 'src/app/interface/productmodel';
//custom pipes used for search bar
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:ProductModel[],search:string): ProductModel[] {
    if(search.trim()==='')
    {
      return value;
    }
    else{
      return value.filter(product=>product.name.toUpperCase().includes(search.toUpperCase().trim()));
    }
  }

}
