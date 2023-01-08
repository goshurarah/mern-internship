console.log('EXPRESSIONS AND OPERATORS');

/*
Types of operators:

1. Assignment operators
2. Arithmetic operators
3. Comparison operators
4. Logical operators
5. String operators
6. Conditional(ternary) operator


1. Assignment operators: assign values to the variables
Operator ||Example   ||Same As
1. =	 || x = y	 || x = y
2. +=	 || x += y	 || x = x + y
3. -=	 || x -= y	 || x = x - y
4. *=	 || x *= y	 || x = x * y
5. /=	 || x /= y	 || x = x / y
6. %=	 || x %= y	 || x = x % y
7. <<=	 || x <<= y	 || x = x << y
8. >>=	 || x >>= y	 || x = x >> y
9. >>>=	 || x >>>= y || x = x >>> y
10. &=	 || x &= y	 || x = x & y
11. ^=	 || x ^= y	 || x = x ^ y
12. |=	 || x |= y	 || x = x | y
13. **=	 || x **= y	 || x = x ** y


2. Arithmetic operators: perform arithmetic on numbers (literals or variables)
Operator || Description
1. +	 || Addition
2. -	 || Subtraction
3. *	 || Multiplication
4. **	 || Exponentiation
5. /	 || Division
6. %	 || Modulus (Remainder)
7. ++	 || Increment
8. --	 || Decrement


3. Comparison operators: can compare numbers or strings and perform evaluations
Operator || Description
1. ==	 || equal to
2. ===	 || equal value and equal type
3. !=	 || not equal
4. !==	 || not equal value or not equal type
5. >	 || greater than
6. <	 || less than
7. >=	 || greater than or equal to
8. <=	 || less than or equal to
9. ?	 || ternary operator


4. Logical operators: operate on boolean expressions to combine the results of 
these boolean expression into a single boolean value
Operator || Description
1. &&	 || logical and
2. ||	 || logical or
3. !	 || logical not


5. String operators: concatenation operator (+) concatenates two or more 
string values together and return another string which is the union of 
the two operand strings.
Operator || Description
1. +	 || add (concatenate)
2. +=	 || assignment operator (contcatenate)


6. Conditional (ternary) operator: assigns a value to a variable based on a condition.
variablename = (condition) ? value1:value2;

*/

//assignment operators
let thisVal = 10;
console.log(thisVal += 5);
console.log(thisVal -= 5);
console.log(thisVal *= 5);
console.log(thisVal /= 5);
console.log(thisVal %= 5);



//arithmetic operators
var num1 = 90;
var num2 = 2;
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
// exponential
let exp = 5;
let result1 = exp ** 2
console.log(result1);
//increment
let val1 = 5;
// let result2=val1++;
let result2 = ++val1;
console.log(result2);
//decrement
let val2 = 5;
// let result3=val2--;
let result3 = --val2;
console.log(result3);



//comparison operators
let x1 = 8
let int1 = 8
let res1 = int1 == x1
console.log(res1);

let x2 = 8
let int2 = 8
let res2 = int2 === x2
console.log(res2);

let x22 = 8
let int22 = 5
let res22 = int22 === x22
console.log(res22);

let x3 = 8
let int3 = 5
let res3 = int3 != x3
console.log(res3);

let x4 = 8
let int4 = 8
let res4 = int4 !== x4
console.log(res4);

let x5 = 8
let int5 = 5
let res5 = int5 > x5
console.log(res5);

let x6 = 8
let int6 = 5
let res6 = int6 < x6
console.log(res6);


let x7 = 8
let int7 = 5
let res7 = int7 <= x7
console.log(res7);

let x8 = 8
let int8 = 5
let res8 = int8 >= x8
console.log(res8);



//logical operators
let x9 = 8
let int9 = 8
let res9 = int9 == x9 && int9 !== x9
console.log(res9);

let x10 = 8
let int10 = 5
let res10 = int10 < x10 || int10 === x10
console.log(res10);

let x11 = 8
let int11 = 8
let res11 = !(int11 === x11)
console.log(res11);



//string operators
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
console.log(text3);

let text4 = "What a very ";
let word = text4 += "nice day";
console.log(word);



//conditional operator
let age = 18
output = (age < 18) ? "Too young" : "Old enough";
console.log(output);


// // IMPORTANT QUESTION:
// // 1. write a program to swap two numbers || required output=a=10 and b=5
// let a=5
// let b=10

// b=b-a;// b=5
// a=a+b

// console.log(a);
// console.log(b);



// // IMPORTANT QUESTION:
// // 2. write a program to swap two numbers || required output=a=25 and b=50
// let a=50
// let b=25

// b+=b 
// a=b-25

// console.log(a);
// console.log(b);