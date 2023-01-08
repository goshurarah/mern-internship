console.log('FUNCTION CURRYING');

/*
in this function, every return keyword give a function 
 */


let sum=(a)=>(b)=>(c)=> console.log(a+b+c);

///bellow not three argument/ bellow 1 argument and itself a function
sum(4)(4)(4)