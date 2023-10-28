//validation 

import mangoose from "mongoose";

const  productScema = new mangoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String

});


const Product = mangoose.model('product', productScema)

export default Product;