const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/School-system')

/*                  IMPORTANT NOTE!==>>SCHEMA TYPES BELLOW
1. String
2. Number
3. Date
4. Buffer
5. Boolean
6. Mixed
7. ObjectId
8. Array
9. Decimal128
10. Map
11. Schema


1==>> VALIDATION OF STRING IS HERE:===>>>>
1. lowercase
2. upppercase
3. enum:this method check that Is the inserted value is match or not with build_in-array
4. trim: this cutting the before and after free spaces of value
5. match:this method checks that the value is match with given expression
6. minlength
7. maxlength

2==>> VALIDATION OF NUMBER IS HERE:===>>>>
1. min: checks the value is greater than or equal to the given minimum.
2. max: checks the value is less than or equal to the given maximum.
3. enum: checks the value is strictly equal to one of the values in the given array
4. populate: object, sets default 

3==>> VALIDATION OF DATE IS HERE:===>>>>
1. min: checks if the value is greater than or equal to the given minimum.
2. max: checks if the value is less than or equal to the given maximum.
3. expires: Number or String, creates a TTL index with the value expressed in seconds

4==>> VALIDATION OF OBJECTID IS HERE:===>>>>
populate: object, sets default populate options

5==>> VALIDATION OF BOOLEAN IS HERE:===>>>>
Mongoose casts the below values to true:
1. true
2. 'true'
3. 1
4. '1'
5. 'yes'
Mongoose casts the below values to false:
1. false
2. 'false'
3. 0
4. '0'
5. 'no'
 */

//Schema means (validation/structure of a document)
const studentsSchema = new mongoose.Schema({
    student_name:{
        type:String,
        uppercase:true,
        required:true
    },
    father_name:{
        type:String,
        uppercase:true,
        required:true},
    roll_num: {
        type:Number,
        required:true,
        unique:true
    },
    ph_number: {
        type:Number,
        minlength:11,
        maxlength:12,
        required:true,
        unique:true
    },
    address: {
        type:String,
        uppercase:true,},
    gender:{
        type:String,
        uppercase:true,
        enum:['MALE', 'FEMALE']
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
        address: 'Lahore',
        gender: 'male'
    });
    await studentsregisteration.insertMany(document1);
    console.log(document1);
}
// insertData()
 






//here 2. read method with mongoose
const readData = async () => {
        //bellow if we want to see specific part of database then find method is written as like .find({object_id/first_object_name}) 
        let database=await studentsregisteration.find();
        console.log(database); 
}
// readData()








//here 3. update method with mongoose
const updateData = async () => {
    await studentsregisteration.updateOne();

    // //bellow line is used to update multiple properties of an object , you can also update the first property/os_name of object
    // await studentsregisteration.updateOne()} });
}
// updateData()




//here 4. delete method with mongoose
const deleteData = async () => {
    await studentsregisteration.deleteMany({});
}
// deleteData()

