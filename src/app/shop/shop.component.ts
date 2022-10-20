import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.reducer';
import { Product } from '../core/models/product';
import * as fromShop from '../store/shop/shop.actions';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  shop$ = this.store.select('shop');

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { }

  addToCart(product: Product): void {
    this.store.dispatch(fromShop.AddProductToCart({ product: product }));
  }
}
