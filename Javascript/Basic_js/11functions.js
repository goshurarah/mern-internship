console.log('FUNCTIONS');


//1. simple function
function sum() {
    let a = 5, b = 5;
    let total = a + b;
    console.log(total);
}
sum()
//example of simple functions method
function wish(boyname4, description) {
    console.log(`'Happy Birthday ${boyname4}. ${description}'`);
}
let boyname1 = 'Mujahid';
let boyname2 = 'Hurarah';
let boyname3 = 'Ali';
let boyname4 = 'Hashim';
let boyname5 = 'Zubair';
wish(boyname4, 'No pain No gain');



//2. function with parameters and arguments
//we can use (this) keyword in regular function
function sum(a, b) {
    let total = a + b;
    console.log(total);
}
sum(5, 5)




//3. function expression with return keyword
function sum(a, b) {
    return total = a + b;
}
let funcExp = sum(5, 10)
console.log(funcExp);




//4. function with default parameters
function sum(a=15, b=5) {
    return  a + b;
}
// let funcExp2 = sum(56)
// let funcExp2 = sum(56, 7)
let funcExp2 = sum()
console.log(funcExp2);





//5. Anonymous function
let sum = function (a, b) {
    total = a + b;
    console.log(total);
}
sum(5, 10)
// example of anonymous function
let myfunct = function (boynameVar4, descriptionVar) {
    let message = `'Happy Birthday ${boynameVar4}. ${descriptionVar}'`;
    return message;
}
let boynameVar1 = 'Mujahid';
let boynameVar2 = 'Hurarah';
let boynameVar3 = 'Ali';
let boynameVar4 = 'Hashim';
let boynameVar5 = 'Zubair';
let myVarr = myfunct(boynameVar4, 'No pain No gain');
console.log(myVarr);
