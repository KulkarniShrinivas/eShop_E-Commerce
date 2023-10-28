//to create connection with mongoDB we need one liberary to instal npm i mongoose
// mongoose.connect() it takes two arguments 1. URL and 2. Object 
//database is external entity so we use try catch 
//useUnifiedTopology: this is object mongoddb uses internal managing engine so it is deplicated so we can use new montitoring engine
// useNewUrlParser mongoDb url we need to pass the url mongodb will pass the url

//.connect is async function so I have used async and await function 

//Ading authenticated Username and pasword in code is bad idea so we need to intsall new package npm i dotenv so in pakage.json will get dotenv and version 

import mongoose from "mongoose";

 const Connection = async(username, password) => {
    // const URL = 'mongodb+srv://shrinivaskulkarni:Shrinya3995@ecommerce-web.q3tp2mr.mongodb.net/';
    // const URL = `mongodb+srv://${username}:${password}@ecommerce-web.q3tp2mr.mongodb.net/`;
    const URL = `mongodb://${username}:${password}@ac-6ajxxpa-shard-00-00.q3tp2mr.mongodb.net:27017,ac-6ajxxpa-shard-00-01.q3tp2mr.mongodb.net:27017,ac-6ajxxpa-shard-00-02.q3tp2mr.mongodb.net:27017/?ssl=true&replicaSet=atlas-biuzsb-shard-0&authSource=admin&retryWrites=true&w=majority`

    try{
      await  mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true} );
      console.log('Database connected Successfully');

    } catch(error) {
        console.log('Error while connecting with database', error.message);
    }
};

export default Connection;
