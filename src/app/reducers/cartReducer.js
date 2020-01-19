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
            return {...state, cartItems: state.cartItems.filter(item => item.id !== action.id)};
        case actionTypes.EMPTY_CART:
            return {...state, cartItems: []};
        default:
            return state;
    }
}
//reducer to update the addlist to products
// export const addToListReducer = (state = initialState, action) => {
//     console.log('addToList reducer is called');
//     console.log('state',state,'action',action);
//     switch (action.type) {
//             case actionTypes.PROLIST_SELECTED:
//             return [...state,action.item];
//         default:
//             return state;
//     }
// }

// export const jsonReducer = (state = initialState, action) => {
//     console.log('json reducer is called');
//     console.log('state',state,'action',action);
//     switch (action.type) {
//             case actionTypes.JSON_DATA:
//             return [...state,action.list]
//         default:
//             return state;
//     }
// }