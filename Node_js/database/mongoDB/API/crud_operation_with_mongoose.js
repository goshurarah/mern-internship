const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/E-commerce-web')

//Schema means (validation/structure of a document)
const productsSchema = new mongoose.Schema({
    skill_name: {
        type:String,
        uppercase:true

    },
    F_end: String,
    B_end: String,
    database: String,
    active:Boolean
});
//bellow mongoose.model create the collection that has the name (information) in bellow aruguments
let information = mongoose.model('information', productsSchema);

//here 1. create/insert method with mongoose
const insertData = async () => {
        let database1 = new information({
            skill_name: "Mern Stack",
            F_end: "html, css, js, rect",
            B_end: "nodejs, expressjs",
            database: "mongodb",
            active:true
        }); 
        let database2 = new information({
            skill_name: "Mean Stack",
            F_end: "html, css, js, angular",
            B_end: "nodejs, expressjs",
            database: "mongodb",
            active:true
        });
        let database3 = new information({
            skill_name: "Full Stack",
            F_end: "html, css, js, rect/angular",
            B_end: "nodejs, expressjs",
            database: "mongodb",
            active:true
        });
        await information.insertMany([database1,database2,database3]);
        console.log(database1,database2,database3);
}
// insertData()
 






//here 2. read method with mongoose
const readData = async () => {
        //bellow if we want to see specific part of database then find method is written as like .find({object_id/first_object_name}) 
        let database=await information.find();
        console.log(database);
}
// readData()








//here 3. update method with mongoose
const updateData = async () => {
    await information.updateOne({skill_name: "Full Stack"}, { $set: { database: 'MySQL' }});

    // //bellow line is used to update multiple properties of an object , you can also update the first property/os_name of object
    // await information.updateOne({os: "IOS"}, { $set: { color: 'red', os:"IOS-2ND" } });
}
// updateData()




//here 4. delete method with mongoose
const deleteData = async () => {
    await information.deleteOne({skill_name:'Full Stack'});
}
// deleteData()

