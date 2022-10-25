import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from './store/app.reducer';
import { Product } from './core/models/product';
import * as fromShop from './store/shop/shop.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() { 
    this.store.dispatch(fromShop.LoadProducts());
  }

}
