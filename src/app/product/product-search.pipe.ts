import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products:Product[], searchCriteria:string = "".toLowerCase()):Product[] {
    if (searchCriteria === "") return products;
    let selectedProducts:Product[] = [];
    for (let product of products) {
      if (
        product.id.toString().includes(searchCriteria)
        || product.partNumber.toString().includes(searchCriteria)
        || product.name.toLowerCase().includes(searchCriteria)
        || product.vendor.name.toLowerCase().includes(searchCriteria)
      ) selectedProducts.push(product);
    }
    return selectedProducts;
  }

}
