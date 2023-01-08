// 1. Create/Insert/Post
const dbConnect=require('../export_all_data_from_mongodb');
const express=require('express');
const app=express();

//use bellow json method parses incoming requests with JSON payloads and it is based on body-parser
app.use(express.json())
app.post('/',async (req, resp)=>{

    let database=await dbConnect();
    database=await database.insertOne(req.body)
    resp.send(database)
})
app.listen(8010) 







//2. Read/Get
app.get('/',async (req, resp)=>{

    let database=await dbConnect();
    database=await database.find().toArray();
    //for specific data from query params/url
    // database=await database.find({os:req.params.os}).toArray();
    resp.send(database)
})
app.listen(8080,()=>{
    console.log('server is running');
})  





//3. Update/Put
//use bellow json method parses incoming requests with JOSON payloads and it is based on body-parser
app.use(express.json())
app.put('/',async (req, resp)=>{

    let database=await dbConnect();
    database=await database.updateOne(
        //for dynamically data put from postman api is bellow method
        {os:req.body.os},{$set:req.body})
    resp.send(database)
}) 
app.listen(8015)



// //  use bellow json method for put the data in mongodb database
// app.use(express.json())
// app.put('/:os',async (req, resp)=>{

//     let database=await dbConnect();
//     database=await database.updateOne(
//         //for dynamically data put from postman api is bellow method
//         // {os:req.body.os},{$set:req.body}

//         // for changing dynamically the os name 
//         {os:req.params.os},{$set:req.body}
//     )
//     resp.send(req.body)
// })
// app.listen(8015)







// //4. Delete
// //use bellow json method parses incoming requests with JOSON payloads and it is based on body-parser
// app.use(express.json())
// app.delete('/:id',async (req, resp)=>{

//     let database=await dbConnect();
//     //advance method for delete
//     database=await database.deleteOne({_id:new mongoDB.ObjectId(req.params.id)})
//     resp.send(database)
// }) 
// app.listen(8009)




//4. Delete
//use bellow json method parses incoming requests with JOSON payloads and it is based on body-parser
app.use(express.json())
app.delete('/:os',async (req, resp)=>{

    let database=await dbConnect();
    //advance method for delete
    database=await database.deleteOne(req.params)

    //simple method for delete
    // database=await database.deleteOne({os:"IOS2"})
    resp.send(database)
}) 
app.listen(8009)
