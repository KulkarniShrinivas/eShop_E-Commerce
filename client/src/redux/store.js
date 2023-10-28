//Redux is front database as state a centralized data base where we store data
//I have created 3 folders reducers, constants, actions we can do in 1 file also
//For Redux we want 1 extention as Redux DevTools crome extension
//and bydefault we have react dev toolds extension in that we have components and profiler(if your applicaaion is slow then how we can do it fast we can use this)
//after adding extension create store.js and redux is centralized database we can see with help of this extension
//the inspect tab and  in that will be having redux extension and we need to connect the store 
//npm i redux



//from here will connect the store
//create function and e can have multiple reducer using combine reducer and we can use
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({ 
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
})

const middleware = [thunk];


//this will take two arguments store=> reducer(action item) and middleware
// first argument will be reducer and 2nd wll be middleware to connect we need to use composite dev tools as m=> npm i redux-devtools-extension
//install middleware using npm i redux-thunk(famous middleware)

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

)

export default store;


//how we imported Dataprovider.js in div same as that we need to import in imain.jsx as store wherever we want to use redux
//so install npm i react-redux
//create productreducer.js in reducers