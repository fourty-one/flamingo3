import { State, shoppingListReducer } from './shop/shop.reducer';

export interface AppState {
	shop: State;
}

export const reducers = {
	shop: shoppingListReducer
};