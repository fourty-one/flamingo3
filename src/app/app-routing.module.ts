import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

import { ResolveProductService } from './product/resolve-product.service';

const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductComponent,
    resolve: { product: ResolveProductService }
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'root',
    redirectTo: ''
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    ResolveProductService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
