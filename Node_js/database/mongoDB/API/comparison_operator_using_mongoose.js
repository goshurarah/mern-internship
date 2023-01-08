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
COMPARISON OPERATOR=====>>>>
1. $eq: EQUAL TO
2. $gt: GREATER THAN                
3. $gte: GREATER THAN AND EQUAL TO
4. $in: IN AN ARRAY
5. $lt: LESS THAN
6. $lte: LESS THAN AND EQUAL TO
7. $ne: NOT EQUAL TO
8. $nin: NOT IN AN ARRAY
*/


const readData = async () => {
    let database=await products.find()
    // let database=await products.find({price :{$eq:50000}})
    // let database=await products.find({price :{$gt:50000}})
    // let database=await products.find({price :{$gte:50000}})
    // let database=await products.find({price :{$in:50000}})
    // let database=await products.find({price :{$lt:50000}})
    // let database=await products.find({price :{$lte:50000}})
    // let database=await products.find({price :{$ne:50000}})
    // let database=await products.find({price :{$nin:50000}})
    // let database=await products.find().limit(3)
    // let database=await products.find().select({ph_name:1});
    // let database=await products.find({price:50000}, {_id:0, ph_name:1});

    console.log(database);
}
readData()
