import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../models/product';

@Pipe({
  name: 'quantityAll',
  pure: false
})
export class QuantityAllPipe implements PipeTransform {
  transform(products: Product[]): number {
    let quantity = products.reduce(
      (total, product) => { 
        return product.quantity + total 
      }, 0
    );

    return quantity;
  }
}