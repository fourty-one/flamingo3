import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Thumbs } from 'swiper';
SwiperCore.use([Thumbs]);

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductSliderComponent implements OnInit {
  thumbsSwiper: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
