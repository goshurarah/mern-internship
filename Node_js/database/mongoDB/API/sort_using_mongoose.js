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

const readData = async () => {
    let database=await products.find().select({_id:0,ph_name:1}).sort({ph_name:1}) //ascending order
    // let database=await products.find().select({_id:0,ph_name:1}).sort({ph_name:-1}) //decsending order
    console.log(database);
}
readData()
