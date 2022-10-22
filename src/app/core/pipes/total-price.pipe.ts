import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../models/product';

@Pipe({
  name: 'totalPrice',
  pure: false
})
export class TotalPricePipe implements PipeTransform {
  transform(products: Product[]): number {
    let total = products.reduce(
      (total, product) => { 
        let price = product.price * product.quantity;

        return total + price; 
      }, 0
    );

    return total;
  }
}