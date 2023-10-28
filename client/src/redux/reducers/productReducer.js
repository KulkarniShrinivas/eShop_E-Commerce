//in reducers we have 2 default actions state(current value) action(updated value )

import * as actionType from '../constants/productConstant';


// { products: [] take this as empty array so that our ui should not break 
export const getProductsReducer = (state = { products: [] }, action) => {
   
    switch (action.type) {  // Fix: parentheses instead of curly brace
        case actionType.GET_PRODUCTS_SUCCESS:
            return { products: action.payload };
        case actionType.GET_PRODUCTS_FAIL:  // Fix: added colon
            return { error: action.payload };
        // if we don't get success, failure will get error and UI will break

        default:
            return state;
    }

};


//wherever we find we need to add switch statment 
//in this we are taking for single object 

export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
    switch(action.type){
        case actionType.GET_PRODUCT_DETAILS_REQUEST: 
            return { loading: true }
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionType.GET_PRODUCT_DETAILS_RESET: 
            return {
                product: {}
            }
        default:
            return state
    }
}