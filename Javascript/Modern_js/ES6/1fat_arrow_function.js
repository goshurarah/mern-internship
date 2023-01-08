console.log('FAT ARROW FUNCTION/ CALL BACK FUNCTION');
/*
Fat arrow function:
1. (this) keyword is not supported in fat arrow function
2. syntax is : (parenthesis)=>{}
*/


//calculation
const calc = (a, b) => {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);

}
calc(5, 5)
