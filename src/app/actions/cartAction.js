import * as actionTypes from './actionTypes';

export const addToCart = (item) => {
    return dispatch => {
        dispatch({
            type: actionTypes.ADD_TO_CART,
            item
        });
    };
};

export const removeToCart = (id) => {
    return dispatch => {
        dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            id
        });
    };
};

export const emptyCart = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.EMPTY_CART
        });
    };
}
//action for adding newlist to products
export const prolistSelected = (item) => {
    return dispatch => {
        dispatch({
            type: actionTypes.PROLIST_SELECTED,
            item
        });   
    };
};
