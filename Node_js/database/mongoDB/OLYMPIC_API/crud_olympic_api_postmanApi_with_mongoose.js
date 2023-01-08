const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/OLYMPIC-API')


const express=require('express')
const app=express()


const port=process.env.PORT || 1010;

const mensSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        uppercase:true,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        uppercase:true,
        trim: true
    },
    country: {
        type: String,
        uppercase:true,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true,
    },
    event: {
        type: String,
        default: "100m"
    }

});
let mensRanking = mongoose.model('competitors', mensSchema);


//create
app.use(express.json())
app.post('/creating', async (req, resp)=>{
    let document = new mensRanking(req.body)
    document=await document.save()
    resp.send(document);
})
 


//read
app.get('/reading', async (req, resp)=>{
    let document=await mensRanking.find()
    resp.send(document);
})
app.get('/reading/:name', async (req, resp)=>{
    let document=await mensRanking.find(req.params)
    resp.send(document);
})




//update
app.use(express.json())
app.put('/updating/:name', async (req, resp)=>{
    let document = await mensRanking.updateMany({student_name:req.params.student_name},{$set:req.body})
    resp.send(document);
})





//delete
app.use(express.json())
app.delete('/deleting/:name', async (req, resp) => {
    let document = await mensRanking.deleteOne(req.params)
    resp.send(document)

})
// //2nd method from delete by ID
// app.use(express.json())
// app.delete('/deleting/:_id', async (req, resp) => {
//     let document = await mensRanking.deleteOne(req.params)
//     resp.send(document)

// })
app.listen(port, () => {
    console.log(`server is listening to the port ${port}`)
})
