console.log('DO WHILE LOOP');

/*
Do While loop: 
1. firstly it will run one time essentially
2. this loop will run one time essentially before the condition check(condition is true or not?)
3. this loop check condition in the last time of debugging

*/

// simple do-while loop
let j1 = 0;
do {
    console.log(j1);
    j1++;
} while (j1 < 5);



// print even numbers before 30 by using do-while loop
let even1 = 0;
do {
    console.log(even1);
    even1 += 2;
} while (even1 <= 30);



// print odd numbers before 30 by using do-while loop
let odd1 = 1;
do {
    console.log(odd1);
    odd1 += 2;
} while (odd1 <= 30);







//IMPORTANT QUESTION NO 1:
//make a table of any number like as(2,4,8)

//table of 2
let tableOf = 1;
do {
    console.log(`2 * ${tableOf} = ${2 * tableOf}`)
    tableOf++;
} while (tableOf <= 10)
