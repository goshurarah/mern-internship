const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/E-commerce-web')

const express=require('express');
const app=express()

//Schema means (validation/structure of a document)
const productsSchema = new mongoose.Schema({
    os: String,
    ph_name: String,
    model: String,
    color: String,
    price: Number
});
const products=mongoose.model('products', productsSchema)

/*
                            IMPORTANT NOTE!
LOGICAL OPERATOR=====>>>>
1. $or: 
2. $and:                 
3. $not: 
4. $nor: 
*/
const readData = async () => {
    let database=await products.find()
    // let database=await products.find({$or:[{color:"goldy"},{price:60000}]})
    // let database=await products.find({$and:[{color:"gold"},{price:50000}]})
    // let database=await products.find({price: {$not:{$gte:50000}}})
    // let database=await products.find({$nor:[{color:"gold"},{price:60000}]})
    // let database=await products.find().limit(3)
    // let database=await products.find().select({ph_name:1});
    // let database=await products.find({price:50000}, {_id:0, ph_name:1});

    console.log(database);
}
readData()
