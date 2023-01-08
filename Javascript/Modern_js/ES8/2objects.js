console.log('OBJECTS');

/*
Object properties:
1. Object.values()       || return all values into array that are stored in obj's key
2. Object.entries()      || return object into array

*/



//object values and entries
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
}
console.log(Object.values(person));
console.log(Object.entries(person));