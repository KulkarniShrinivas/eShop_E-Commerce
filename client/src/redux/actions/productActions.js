//api call
//call this in home component


import axios from "axios";


import * as actionType from '../constants/productConstant';

const URL = import.meta.env.VITE_SERVER_URL;

export const getProducts = () => async (dispatch) => {
    
    try{

       const { data } = await axios.get(`${URL}/products`);
       console.log(data, "Hi");
      

        //important reducer is hook in this we use dispatch
    
        dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data })

    }  catch(error){
        dispatch({ type: actionType.GET_PRODUCTS_FAIL, payload: error.message  })

    }
}


//whwenver we request we add dispatch 
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${URL}/product/${id}`);
        
        console.log("Product Details API Response:", data); // Log the response

        dispatch({ type: actionType.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_FAIL, payload: error.response });
    }
};
