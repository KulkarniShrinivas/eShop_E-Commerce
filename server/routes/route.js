//routing can be done by importing express
//and connect this router with index.js 
//userSignup is callback function this is backend api 


import express from 'express';
import { userSignup, userLogin } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';


//import paymentgateway here

import { addPaymentGateway } from '../controller/payment-controller.js';


const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin); //create function with help of userLogin in usercontroller.js



//we need to handle this with redux but first will create controller to handle products as product-controlle.js
router.get('/products', getProducts);
router.get('/product/:id', getProductById);

//paytm

router.post('payment', addPaymentGateway);

//now create file in controller as payment-controller.js

export default router;