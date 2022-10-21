import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.reducer';
import { Product } from '../core/models/product';
import * as fromShop from '../store/shop/shop.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  shop$ = this.store.select('shop');

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { }

  incrementCartQuantity(productId: number): void {
    this.store.dispatch(
      fromShop.IncrementCartQuantity({ productId: productId })
    );
  }

  decrementCartQuantity(productId: number): void {
    this.store.dispatch(
      fromShop.DecrementCartQuantity({ productId: productId })
    );
  }

  removeFromCart(productId: number): void {
    this.store.dispatch(
      fromShop.RemoveProductFromCart({ productId: productId })
    );
  }
}
