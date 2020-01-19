import { combineReducers } from 'redux';
//root reducer to combine all reducer
import {cartReducer} from './cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    //json: jsonReducer,
    //addlist : addToListReducer

});

export default rootReducer;