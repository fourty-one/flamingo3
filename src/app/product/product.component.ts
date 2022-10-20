import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  data$ = this.route.data;
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
