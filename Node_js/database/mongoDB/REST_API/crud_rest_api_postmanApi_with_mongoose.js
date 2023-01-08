const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/REST-API')
const express=require('express')
const app=express()
const port=process.env.PORT || 5050;
//require validator
let validator=require('validator')

const studentsSchema = new mongoose.Schema({
    student_name: {
        type: String,
        uppercase: true,
        required: true
    },
    father_name: {
        type: String,
        uppercase: true,
        required: true
    },
    roll_num: {
        type: Number,
        required: true,
        unique:true
    },
    ph_number: {
        type: Number,
        minlength: 11,
        maxlength: 12,
        required: true,
        unique:true
    },
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        },
        unique:true
    },
    address: {
        type: String,
        uppercase: true,
    },
    gender: {
        type: String,
        uppercase: true,
        enum: ['MALE', 'FEMALE']
    },
    subjects: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('You should enter at least 1 subject')
            }
        }
    }
});
//bellow mongoose.model create the collection that has the name (stdregisterations) in bellow aruguments
let stdRegisteration = mongoose.model('stdregisterations', studentsSchema);


//create
app.use(express.json())
app.post('/registeration', async (req, resp)=>{
    let document1 = new stdRegisteration(req.body)
    document1=await document1.save()
    resp.send(document1);
})
 


//read
app.get('/registeration', async (req, resp)=>{
    let document1=await stdRegisteration.find()
    resp.send(document1);
})
app.get('/registeration/:student_name', async (req, resp)=>{
    let document1=await stdRegisteration.find(req.params)
    resp.send(document1);
})




//update
app.use(express.json())
app.put('/registeration/:student_name', async (req, resp)=>{
    let document1 = await stdRegisteration.updateMany({student_name:req.params.student_name},{$set:req.body})
    resp.send(document1);
})





//delete
app.use(express.json())
app.delete('/registeration/:student_name', async (req, resp) => {
    let document1 = await stdRegisteration.deleteOne(req.params)
    resp.send(document1)

})
// //2nd method from delete by ID
// app.use(express.json())
// app.delete('/registeration/:_id', async (req, resp) => {
//     let document1 = await stdRegisteration.deleteOne(req.params)
//     resp.send(document1)

// })
app.listen(port, () => {
    console.log(`server is listening to the port ${port}`)
})

