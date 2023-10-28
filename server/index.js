//npm init this will give us empty package.json file
//npm i express

// const express = require('express'); not neccessary as we have new version of node EA6 version where we can import as below
//but if we want to import expres we need to specify seperately in package.json and mention type:module
//with the help of node we can run expres server

//everytime we cant restart the server using npm start so to tackle this we can use this liberary npm i nodemon so 
//this will autometicaly saves and reflects in server but we neeed to mentoion in package.json 
//pakage.json, index.js, database db.js, .env, default.js, consatnts data.js, model product-schema.js, routes routes.js, controller user-controller.js, model user-schema.js

//backend setup database, stored products!


// as node index.js in this we need to addd nodemon index.js
//import dot env from installed package that is present in pakage.json
//intializze .env and create .env file



import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import DefaultData from './default.js';

import Router from './routes/route.js';



// initialize the express
const app = express();

// app.use(cors( 
//     {
//         origin: ["e-shop-e-commerce-dzig.vercel.app"],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ));


app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true}))

//intilize the dotenv
dotenv.config();

app.use('/', Router);


const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);




// create express server
app.listen(PORT, () => console.log(`Server is running sucessfully on PORT ${PORT}`));

// DefaultData();