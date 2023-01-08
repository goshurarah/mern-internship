console.log('MATH OBJECTS');

/*
1. Math.PI()                || method return the value of 22/7 (pie)
2. Math.E()                 || 
3. Math.abs()               || method convert the negative integer into positive integer
4. Math.round()             || if decimal number<5 then it return existing input integer,if decimal number>=5,then it will add 1 in the existing integer

5. Math.floor()             || method return as it is integer before decimal number except negative integer
6. Math.trunc()             || method return as it is integer before decimal number

7. Math.ceil()              || if found any decimal number then this method add (1) in existing integer
8. Math.sqrt()              || method return square root
9. Math.pow()               || method return the exponential expression like as (5**3)
10.Math.min();              || method return minimum number
11.Math.max();              || method return miximum number
12.Math.random();           || method generate the random number between (0-1)

*/

let mathObjects;
mathObjects = Math.PI;

mathObjects = Math.E;

mathObjects = Math.abs(-46);

mathObjects = Math.round(45.4);

mathObjects = Math.floor(45.4);
mathObjects = Math.trunc(45.4);
mathObjects = Math.trunc(-45.4);

mathObjects = Math.ceil(45.1);

mathObjects = Math.sqrt(196);

mathObjects = Math.pow(5, 3);

mathObjects = Math.min(1, 23, 5, 346474, 464, -43, -3453, -99999);

mathObjects = Math.max(1, 23, 5, 346474, 464, -43, -3453, -99999);

mathObjects = Math.random();

mathObjects = Math.floor(Math.random() * 100); //return value below 100

mathObjects = Math.floor(50 + Math.random() * (100-50))//retun value betweem (50 to 100)


console.log(mathObjects);
