console.log('SWITCH STATEMENT');
/*write a program using switch statement that a person can drive bike if his age is above or equal to 
18 and bellow or equal to 30, a person can drive bus if his age is above or equal to 31 and bellow or 
equal to 50, a person can drive car if his age is above or equal to 51 and bellow or equal to 60, 
otherwise system give this statement "NOT ALLOWED TO DRIVE ANYTHING AS LAW OF GOVERNMENT ('_')"?
*/


// user can enter age bellow line for seeing the result of this problem 
let driver2_age = 25;

switch (driver2_age) {
    case 18:
        console.log("He can drive the BIKE");
        break;

    case 30:
        console.log("He can drive the BUS");
        break;


    default:
        console.log("NOT ALLOWED TO DRIVE ANYTHING AS LAW OF GOVERNMENT ('_')");
        break;

}
// //for date
// switch (new Date().getDay()) {
//     case 0:
//         console.log('Sunday');
//         break;
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
// }



//IMPORTANT QUESTION NO 1:
/*
What is area of circle, triangle and rectangle in JS using Switch statement?
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
let area = 'rectangle';
let PI = 3.14, l = 4, w = 5, r = 2;

switch (area) {
    case 'circle':
        console.log('Area of Circle = ' + PI * (r ** 2));
        break;

    case 'triangle':
        console.log('Area of Triangle = ' + (l * w) / 2);
        break;

    case 'rectangle':
        console.log('Area of Rectangle = ' + l * w);
        break;

    default:
        console.log('Invalid Input');
        break;
}