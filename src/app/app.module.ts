import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { SwiperModule } from 'swiper/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { reducers } from './store/app.reducer';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';
import { ShopProductComponent } from './shop/shop-product/shop-product.component';
import { ProductComponent } from './product/product.component';
import { ProductSliderComponent } from './product/product-slider/product-slider.component';
import { CartComponent } from './cart/cart.component';
import { CartProductComponent } from './cart/cart-product/cart-product.component';

import { TotalPricePipe } from './core/pipes/total-price.pipe'; 
import { QuantityAllPipe } from './core/pipes/quantity-all.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ShopComponent,
    ShopProductComponent,
    ProductComponent,
    ProductSliderComponent,
    CartComponent,
    CartProductComponent,
    TotalPricePipe,
    QuantityAllPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    MatIconModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
