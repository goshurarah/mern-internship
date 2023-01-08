const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/REST-API')

//require validator
let validator = require('validator')


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
        unique: true
    },
    ph_number: {
        type: Number,
        minlength: 11,
        maxlength: 12,
        required: true,
        unique: true
    },
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        },
        unique: true
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
        maxlength:7,
        validate(value) {
            if (value < 0) {
                throw new Error('You should enter at least 1 subject')
            }
        }
    }
});
//bellow mongoose.model create the collection that has the name (stdregisterations) in bellow aruguments
let stdRegisteration = mongoose.model('stdregisterations', studentsSchema);
module.exports=stdRegisteration;