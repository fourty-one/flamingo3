import { createAction, props } from '@ngrx/store';

import { Product } from '../../core/models/product';

export const LoadProducts = createAction(
  '[Shop] LoadProducts',
);

export const ProductsLoadedSuccess = createAction(
  '[Shop] ProductsLoadedSuccess',
  props<{ products: Product[] }>()
);

export const ProductsLoadedError = createAction(
  '[Shop] ProductsLoadedError'
);

export const AddProductToCart = createAction(
  '[Shop] AddProductToCart',
  props<{ product: Product }>()
);

export const RemoveProductFromCart = createAction(
  '[Shop] RemoveProductFromCart',
  props<{ productId: number }>()
);

export const IncrementCartQuantity = createAction(
  '[Shop] IncrementCartQuantity',
  props<{ productId: number }>()
);

export const DecrementCartQuantity = createAction(
  '[Shop] DecrementCartQuantity',
  props<{ productId: number }>()
);