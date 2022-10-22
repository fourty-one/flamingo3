import { Component, OnInit  } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { Product } from '../core/models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  shop$ = this.store.select('shop');

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { }
}
