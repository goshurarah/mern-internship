//1. Create/Insert/Post
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/E-commerce-web')

const express=require('express'); 
const app=express();

//Schema means validation of a variable type
const productsSchema = new mongoose.Schema({
    os: String,
    ph_name: String,
    model: String,
    color: String,
    price: Number
});
let products=mongoose.model('products', productsSchema)


//use bellow json method parses incoming requests with JSON payloads and it is based on body-parser
app.use(express.json())
app.post('/create', async (req, resp) => {
    let database = new products(req.body);
    database = await database.save();
    resp.send(database)
})
app.listen(1000)





//2. Read/Get
//use bellow json method parses incoming requests with JOSON payloads and it is based on body-parser
app.use(express.json())
app.get('/read',async (req, resp)=>{
    let database=await products.find();
    resp.send(database)
})
app.listen(3000)








//3. Update/Put
//use bellow json method parses incoming requests with JOSON payloads and it is based on body-parser
app.use(express.json())
app.put('/update', async (req, resp) => {
    let database = await products.updateMany(
        { os: req.body.os }, { $set: req.body });
    resp.send(database)
})
app.listen(2000)







//4. Delete
//use bellow json method parses incoming requests with JOSON payloads and it is based on body-parser
app.use(express.json())
app.delete('/:_id',async (req, resp)=>{
    let database=await products.deleteOne(req.params);
    resp.send(database)
})
app.listen(4000)
