import * as actionTypes from '../actions/actionTypes';

const initialState = {cartItems: [], productItems:[]};
export const cartReducer = (state = initialState, action) => {
    console.log('cartReducer-called');
    console.log(action);
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {...state, cartItems:[...state.cartItems, action.item]};
        case actionTypes.PROLIST_SELECTED:
            return {...state, productItems:[...state.productItems, action.item]};
        case actionTypes.REMOVE_FROM_CART:
            return {...state, cartItems: state.cartItems.filter(item => item.uniqueId !== action.uniqueId)};
        case actionTypes.EMPTY_CART:
            return {...state, cartItems: []};
        default:
            return state;
    }
};
