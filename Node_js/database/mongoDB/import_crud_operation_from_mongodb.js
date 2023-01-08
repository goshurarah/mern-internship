const dbConnect=require('./export_connection_of_mongodb');




//1. Create/Insert/Post
let insertData=async ()=>{
    let database=await dbConnect();

    //bellow if you want to insert data in single form, you can use insertOne().
    //for insert data in multiple form , you can use insertMany()/insert()
    database=await database.insertMany([{
        os:'android17',
        ph_name:'xiomi',
        model:'poco x3 pro',
        color:'black',
        price:60000
    },
    {
        os:'android9',
        ph_name:'xiomi',
        model:'9T',
        color:'black',
        price:57000
    },
    {
        os:'android10',
        ph_name:'xiomi',
        model:'poco x3',
        color:'black',
        price:42000
    }]);
    console.log(database);

}
// insertData(); 







//2. Read/Get
// //using Promise method to see the database collection 
// dbConnect().then((response) => {
//     //bellow if we want to see specific part of database then find method is written as like .find({object_id/first_object_property})
//     response.find().toArray().then((readData) => {
//         console.log(readData);
//     })
// });

 
//Asynchronous method to see the database collection 
const readData=async ()=>{
    let database=await dbConnect();
    database=await database.find().toArray();
    
    /*                                        IMPORTANT COMMANDS OF CMD HERE!
    
    */
    // database=await database.find().pretty()   //this run on cmd and get result as a document format
    // database=await database.find({os:"android"}).toArray()    //here this argument give the specific data
    // database=await database.find({os:"android"},{_id:0, model:1}).pretty()   //this run on cmd and get result only the android's model detail
    // database=await database.find({}).limit(2)   //this run on cmd and get result
    console.log(database);
    }
    // readData()// function invoked/called







    
//3. Update/Put
let updateData=async ()=>{

//bellow if you want to update data in single document, you can use updateOne().
    //for update data in multiple document, you can use updateMany()/update()
let database= await dbConnect();
database=await database.updateOne({os:'android'}, {$set:{price:78000}})
// database=await database.updateMany({color:'black'}, {$set:{color:"white"}})//for update many fields at the same time

console.log(database);
}
// updateData(); 








//4. Delete
let deleteData=async ()=>{

//bellow if you want to delete data in single form, you can use deleteOne().
//for delete data in multiple form , you can use deleteMany()/delete()
let database= await dbConnect();
database=await database.deleteOne({os:"android14"})
// database=await database.deleteMany({})// here all the documents will be deleted
// database=await database.drop()//this process also delete all the collections/documents

console.log(database);
}
// deleteData(); 


