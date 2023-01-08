console.log('OOP');

/*
"this" keyword:
1. (this) it is an object
2. it contains the currrent context
3. it store/have different values depending on where it is placed
4. it can not work  with fat arrow function
5. if it is not placed in current context then it will work/show with (window) global object
*/



// //this object
// let bioData = {
//     myName: 'hurarah',
//     fatherName: 'akbar',
//     city: 'lhr',
//     getData(){
//         console.log(this.city);
//     }
// }
// bioData.getData()



// //this object with fat arrow function
// let bioData = {
//     myName: 'hurarah',
//     fatherName: 'akbar',
//     city: 'lhr',
//     getData:()=>{
//         console.log(this.city);//it will give undefined and work/show with window global object
//     }
// }
// bioData.getData()


// //Object literal
// let bioData = {
//     myName: {
//         firstName: 'Muhammad',
//         lastName: 'Hurarah'
//     },
//     fatherName: 'Akbar',
//     city: 'lhr',
//     getData() {
//         console.log(`My name is ${bioData.myName.firstName + ' ' + bioData.myName.lastName}, my father name is ${bioData.fatherName} and i live in ${bioData.city}`);
//         // console.log(`My name is ${this.myName.firstName + ' ' + this.myName.lastName}, my father name is ${this.fatherName} and i live in ${this.city}`);
//     }
// }
// bioData.getData()


    // //Object properties
    // let herName='shital'
    // let info = {
    //     herName: herName,
    //     herAge:24
    //     }
    // console.log(info.herName);


// //Object properties
// let herName='shital'
// let info = {
//     herName,
//     herAge:24
//     }
// console.log(info);



// //Object destructuring
// let bio1 = {
//     fName: 'hurarah',
//     lName: 'akbar',
//     cityyy: 'lhr',
//     ageee: 25
// }
// let {fName, lName, cityyy, ageee}=bio1
// console.log(ageee); 