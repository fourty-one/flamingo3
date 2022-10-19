import { createReducer, on } from '@ngrx/store';

import * as ShopActions from './shop.actions';

import { Product } from '../../core/models/product';

import { products } from '../../core/data/products';

export interface State {
  products: Product[];
  cart: Product[];
}

const initialState: State = {
  products: products,
  cart: []
};

export const shoppingListReducer = createReducer(
	initialState,
	on(ShopActions.IncrementCartQuantity, (state, { productId }) => { 
    let updatedCart = [...state.cart];
      	
    let updatedItemIndex = 
      updatedCart.findIndex(item => item.id === productId);

    if (!updatedCart[updatedItemIndex]) {
      return state;
    }

    const incrementedItem = {
      ...updatedCart[updatedItemIndex]
    };

    incrementedItem.quantity++;

    updatedCart[updatedItemIndex] = incrementedItem;

    console.log(updatedCart);

		return { ...state, cart: updatedCart }; 
	}),
	on(ShopActions.DecrementCartQuantity, (state, { productId }) => {
  		let updatedCart = [...state.cart];
      	let updatedItemIndex = 
      		updatedCart.findIndex(item => item.id === productId);

      	if (updatedCart[updatedItemIndex].quantity < 2) {
        	return state;
      	}

      	const incrementedItem = {
        ...updatedCart[updatedItemIndex]
      };

      incrementedItem.quantity--;

      updatedCart[updatedItemIndex] = incrementedItem;

      console.log(updatedCart);

      	return {...state, cart: updatedCart};
	}),
	on(ShopActions.AddProductToCart, (state, { product }) => {
		let updatedCart = [...state.cart];
    let updatedItemIndex = 
    	updatedCart.findIndex(item => item.id === product.id);

    if (updatedItemIndex < 0) {
     	updatedCart.push({ ...product, quantity: product.quantity });
    } 
    else {
     	let updatedItem = {
          ...updatedCart[updatedItemIndex]
      };

      updatedItem.quantity += product.quantity;
      updatedCart[updatedItemIndex] = updatedItem;
    }

    console.log(updatedCart);

    return {...state, cart: updatedCart};
	}),
	on(ShopActions.RemoveProductFromCart, (state, { productId }) => { 
		let updatedCart = [...state.cart];
      	let updatedItemIndex = updatedCart.findIndex(
        	item => item.id === productId
      	);

      	updatedCart.splice(updatedItemIndex, 1);

      	return { ...state, cart: updatedCart };
	}),
)