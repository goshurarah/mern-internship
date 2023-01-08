console.log(`IF-ELSE STATEMENT`);

/*write a program using if else statement that a person can drive bike if his age is above or equal 
to 18 and bellow or equal to 30, a person can drive bus if his age is above or equal to 31 and bellow 
or equal to 50, a person can drive car if his age is above or equal to 51 and bellow or equal to 60,
otherwise system give this statement "NOT ALLOWED TO DRIVE ANYTHING AS LAW OF GOVERNMENT ('_')"?
*/

// user can enter age bellow line for seeing the result of this problem 
let driver_age = 25;

//condition using (logical and/&&)  operator
if (driver_age >= 18 && driver_age <= 30) {
    console.log("He can drive the BIKE");
}
else if (driver_age >= 31 && driver_age <= 50) {
    console.log("He can drive the BUS");
}
else if (driver_age >= 51 && driver_age <= 60) {
    console.log("He can drive the CAR");
}
else {
    console.log("NOT ALLOWED TO DRIVE ANYTHING AS LAW OF GOVERNMENT ('_')");
}






//condition using (logical or/||)  operator
let absent = 45;
let attendence = 70;

if (absent <= 20 || attendence >= 80) {
    console.log('He will gain A Grade');
}
else if (absent <= 40 || attendence >= 60) {
    console.log('He will gain B Grade');
}
else {
    console.log(`'He will fail ( '_' )`);

}




// conditional (ternary) operator
let day = 2;
console.log("You spend", day, (day > 1) ? 'days' : 'day');




//IMPORTANT QUESTION NO 1:
/*
Symbols of leap year is bellow:

1. leap year=366 days (1 day included in Feb month like as 29 Feb)
2. leap year are any year that can be exactly divided by 4 (such as 2016,2020,2024)
3. except it can be exactly divided by 100, then it is not (such as 2100,2200)
4. except it can be exactly divided by 400, then it is (such as 2000, 2400)
*/

//write a program that tells year is leap or not?
let year = 2100
//debugger; // this word is used for test this code and firstly this code will be copied then it will paste on console and obtained output
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`This year ${year} is leap year`);
        } else {
            console.log(`This year ${year} is not leap year`);
        }
    } else {
        console.log(`This year ${year} is leap year`);
    }

} else {
    console.log(`This year ${year} is not leap year`);
}




//IMPORTANT QUESTION NO 2:
/*
What is truthy and falsy values in JS?

bellow are falsy values in JS/ means when we use bellow values in if-else statment this will return false
1. 0
2. ""
3. undefined
4. NaN
5. false
6. null
*/

//write a program that tells fasly and truthy?
if (score = null) {
    console.log('true');
}
else {
    console.log('false');
}




//IMPORTANT QUESTION NO 3:
/*
What is area of circle, triangle and rectangle in JS?
Formulas:
1. Area of circle = πr2
2. Area of triangle = (l*w)/2
3. Area of rectangle = (l*w)
*/

// let PI=3.14, l=4, w=5, r=2;
// var AOC=PI*(r**2)
// var AOT=(l*w)/2
// var AOR=l*w
// console.log(AOC, AOT, AOR);


//enter the input here!
let area = 'rectangle'

let PI = 3.14, l = 4, w = 5, r = 2;

if (area == 'circle') {
    console.log('Area of Circle = ' + PI * (r ** 2));
}
else if (area == 'triangle') {
    console.log('Area of Triangle = ' + (l * w) / 2);
}
else if (area == 'rectangle') {
    console.log('Area of Rectangle = ' + l * w);
}
else {
    console.log('Invalid Input');
}