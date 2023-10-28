//to show data in frontend
//so need to insert data in database so I will create Constants file and in that data.js



//also we need to validate data 
//whenever we insert data in database we need to validate 1st like if we are getting 3rd part data so requirments are fullfilled we need to check
//validate by creating module file and in that product-schema.js
//validate object 




import { products } from "./constants/data.js" //import data from data.js we need to fetch from that by importing 
import Product from "./model/product-schema.js";



const DefaultData = async () => { //database is external entity so we might get error so I have added try and catch method
    try{

      
        await Product.insertMany(products); //to avoid duplicate data after everytime we refresh we use await async
        console.log('Data imported succesfully');

    }
    catch(error) {
        console.log('Error while inserting default data', error.message);
    }

}

export default DefaultData;