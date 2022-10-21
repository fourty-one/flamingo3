import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Thumbs } from 'swiper';
SwiperCore.use([Thumbs]);

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductSliderComponent implements OnInit {
  @Input('images') images: string[];
  thumbsSwiper: any;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.images)
  }

}
