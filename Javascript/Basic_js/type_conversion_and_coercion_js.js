console.log("Type conversion and coerrcion");
/*
in JS we can convert the number data types into string and vice versa
we can convert boolen into string and vice versa
we can convert all data types into another data types as saying in above two lines.

*/

//Type conversion

// number into string
//here we write simple simple variable
let myVar=34;
console.log(myVar, (typeof myVar));

// here we convert the number into string
let myVar2=String(34);
console.log(myVar2, (typeof myVar2));

//here we write simple simple variable
let myDate=new Date();
console.log(myDate, (typeof myDate));

// here we convert the number into string
let myDate2=String(new Date());
console.log(myDate2, (typeof myDate2));




// string into number
//here we write simple simple variable
let myVar3="34";
console.log(myVar3, (typeof myVar3));

// here we convert the string into number
let myVar4=Number("34");
console.log(myVar4, (typeof myVar4));


// integer value
let num=parseInt('43')
console.log(num, (typeof num));

//float value
let val2=parseFloat('43.98968')
console.log(val2, (typeof val2));




//Type coercion

let mynum1='45';
let mynum2=5;
console.log(mynum1+mynum2);
/*here in coercion method, number will add when both data types must be same 
other wise this print in simple form as showing in above program lines*/
let my1num=Number('45');
let my2num=5;
console.log(my1num+my2num);
