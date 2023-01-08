const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/School-system')

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
//bellow mongoose.model create the collection that has the name (information) in bellow aruguments
let studentsregisteration = mongoose.model('studentsregisteration', studentsSchema);

//here 1. create/insert method with mongoose
const insertData = async () => {
    let document1 = new studentsregisteration({
        student_name: 'M hurarah akbar',
        father_name: 'm akbar',
        roll_num: 18801,
        ph_number: 92307701984,
        email:'hurarhjutt786@gmail.com',
        address: 'Lahore',
        gender: 'male',
        subjects:-4
    });
    await studentsregisteration.insertMany(document1); 
    console.log(document1);
}
// insertData()
 
const deleteData=async ()=>{
let database=await studentsregisteration.deleteMany({subjects:4})
console.log(database)
}
// deleteData()