import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductsService } from '../core/services/products.service';
     
@Injectable()
export class ProductsEffects {
     
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Shop] LoadProducts'),
      mergeMap(() => this.productsService.getAll()
        .pipe(
          map(products => ({ type: '[Shop] ProductsLoadedSuccess', products: products })),
          catchError(() => of({ type: '[Shop] ProductsLoadedError' }))
        )
      )
    )
  );
     
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}