console.log("VARIABLES IN JS");

/*
variables must follow these instructions:
1. variables name cannot start with number
2. variables name can be start from any letter/alphabet(small/capital), _(underscore) and $(dollar sign)
3. variables name are case sensitive
4. javascript reserved keywords/words cannot be use as a variable name (reserved keywords/words=let,var,const and special characters=%, /, -, *, +)


TWO TYPES OF SCOPE ARE AS FOLLLOWS:
1. LOCAL SCOPE: variables are declare inside the block{} and it is accecced only inside {}.
1. GLOBAL SCOPE: variables are declare outside the block{} and it is accecced outside {}.

Varibales mostly written in these keywords for initiallization/store values:
1. var: global scope/we can access this keyword globally
2. const: local scope/we cannot access this keyword globally
3. let: local scope/we cannot access this keyword globally

Naming Convention of varibales name mostly written in these cases:
1. camelCase
2. kabab-case
3. snake_case
4. PascalCase
*/

//var  keyword
var boyName = 'Hurarah';
boyName='Akbar1'
console.log(boyName);

// //value cannot change in this (const) keyword
// const boyName2 = 'Hurarah';
// boyName2='Akbar'
// console.log(boyName2);

//let keyword
let boyName3 = 'Hurarah';
boyName3='Akbar2'
console.log(boyName3);


// //example of var, const and let
// //bellow we use parts/variables of parent in child class but child parts./variables cannot use bellow child class (as look in line 49)
// function bioData() {
//     let str1 = 'hurarah'
//     console.log(str1);
//     if (true) {
//         const str2 = 'akbar'
//         console.log('inner ' + str1);
//         console.log('inner ' + str2);
//     }
//     //bellow cannot access the upper str2 because the value of str2 stored in block scope keyword like (let/const)
//     console.log('outer '+str1);
//     console.log('outer '+str2);
// }
// bioData()



// addition/subtraction//multiplication/division/modulous
var num1 = 90;
var num2 = 2;
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)

// array
var arrayName = [23, 3, 4, 5];
console.log(arrayName);
console.log(arrayName[0]);
console.log(arrayName[1]);
console.log(arrayName[2]);
console.log(arrayName[3]);