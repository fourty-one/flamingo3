import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.reducer';
import { Product } from '../core/models/product';
import * as fromShop from '../store/shop/shop.actions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  data$ = this.route.data;
  quantity: number = 1;
  
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() { }

  addToCart(product: Product): void {
    this.store.dispatch(fromShop.AddProductToCart({ 
      product: { ...product, quantity: this.quantity } 
    }));
    
    this.quantity = 1;
  }
}
