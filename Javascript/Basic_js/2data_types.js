console.log("Data Types In JS");

/*
Primitive data types:

1. String
2. Boolean
3. Number(integer,float)
4. BigInt
5. Undefined
6. Symbol

Reference data types:

1. Array
2. Object
3. Function
4. Date

Additional information:
1. NaN
NaN stand for (not a number)
NaN is a property of global object
*/

//primitive data types
//string
let strName='hurarah';
console.log(strName);
console.log("Data type = "+ (typeof strName));


//boolean
let IsThisMan=true;
console.log(IsThisMan);
console.log("Data type  = "+ (typeof IsThisMan));


//number
let number=45;
console.log(number);
console.log("Data type  = "+ (typeof number));


// null
let value=null;
console.log(value);
console.log("Data type  = "+ (typeof value));


//undefined
let variableName;
console.log(variableName);
console.log("Data type  = "+ (typeof variableName));



//reference data types
//array
let arrayArr=[34,4,5,546,3];
console.log(arrayArr);
console.log("Data type  = "+ (typeof arrayArr));


//object
let myMarks = {
    Hurarah:90, 
    Talha:80, 
    Ali:89
}
console.log(myMarks);
console.log("Data type  = "+ (typeof myMarks));


//function
function funcName() {

}
console.log(funcName);
console.log("Data type  = "+ (typeof (funcName)));


//dates
let date=new Date();
console.log(date);
console.log("Data type  = "+ (typeof date));



// NaN
// let thisNumber=45643534;
// let thisString='sdnfjk';
// console.log(isNan(thisNumber));//its output is (false) beacuse its a number
// console.log(isNan(thisString));//its output is (true) beacuse its a string, not a number

// let input1=NaN===NaN
// let input2=Number.NaN===NaN
// let input3=isNaN(NaN)
// let input4=isNaN(Number.NaN)
// let input5=Number.isNan(NaN)
// console.log(input1);
// console.log(input2);
// console.log(input3);
// console.log(input4);
// console.log(input5);