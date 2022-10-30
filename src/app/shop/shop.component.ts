import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { AppState } from '../store/app.reducer';
import { Product } from '../core/models/product';
import * as fromShop from '../store/shop/shop.actions';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [
    trigger('notification', [
      state('show', style({
        bottom: '5%'
      })),
      state('hide', style({
        bottom: '-100%'
      })),
      transition('hide => show', [
        animate('1s')
      ]),
      transition('show => hide', [
        animate('1s')
      ]),
    ]),
  ]
})
export class ShopComponent implements OnInit {
  shop$ = this.store.select('shop');

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { }

  addToCart(product: Product): void {
    this.showNotification();
    this.store.dispatch(fromShop.AddProductToCart({ product: product }));
    setTimeout(this.hideNotification.bind(this), 4000);
  }

  showNotification() {
    this.store.dispatch(fromShop.ShowNotification());
  }

  hideNotification() {
    this.store.dispatch(fromShop.HideNotification());
  }
}
