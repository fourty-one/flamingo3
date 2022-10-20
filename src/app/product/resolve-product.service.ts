import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, empty, Subscription } from 'rxjs';
import { AppState } from '../store/app.reducer';
import { Product } from '../core/models/product';

@Injectable()
export class ResolveProductService implements Resolve<Product> {
  productId: string;
  product: Product;
  shop: Subscription;

  constructor(
    private store: Store<AppState>
  ) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Product> {
    this.productId = route.paramMap.get('id');

    this.shop = this.store.select('shop').subscribe(shop => {
        this.product = 
          shop.products.find((product: Product) => product.id === +this.productId);
    })

    this.shop.unsubscribe();
    console.log(this.product.id);

    return new Promise((resolve, reject) => {
      resolve(this.product);
    })
  }
}