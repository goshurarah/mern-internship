console.log('WHILE LOOP');

/*
While loop: 
1. firstly it will check condition is true or not?
2. if condition will true then the inner part of loop wll run otherwise not run 

*/


// simple while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}



// print even numbers before 30 by using while loop
let even = 0;
while (even <= 20) {
    console.log(even);
    even +=2;
}



// print odd numbers before 30 by using while loop
let odd = 1;
while (odd <= 30) {
    console.log(odd);
    odd += 2;
}






//IMPORTANT QUESTION NO 1:
//make a table of any number like as(2,4,8)

//table of 2
let tableOf = 1;
while (tableOf <= 10) {
    console.log(`2 * ${tableOf} = ${2 * tableOf}`)
    tableOf++
}
