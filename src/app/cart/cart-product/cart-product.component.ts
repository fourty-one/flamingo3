import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../core/models/product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  @Input('product') product: Product;
  @Output('incrementCartQuantity') incrementCartQuantity = new EventEmitter<number>();
  @Output('decrementCartQuantity') decrementCartQuantity = new EventEmitter<number>();
  @Output('removeFromCart') removeFromCart = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void { }

}
