import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../core/models/product';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {
  @Input('product') product: Product;
  @Output('addToCart') addToCart = new EventEmitter<Product>();

  quantity: number = 1;

  constructor() { }

  ngOnInit(): void { }

  add(): void {
    this.addToCart.emit({ ...this.product, quantity: this.quantity })
    this.quantity = 1;
  }
}
