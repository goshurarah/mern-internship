console.log('CALLBACK FUNCTION');


/*
CALLBACK FUNCTION:
A CBF is a function that passed as an argument to another function, to be "called back" at the later time.



*/

let add=(a, b)=>{
    return a+b
}

let sub=(a, b)=>{
    return a-b
}

let mul=(a, b)=>{
    return a*b
}

let div=(a, b)=>{
    return a/b
}


//bellow calculator is a Hight Order Function (HOF) and their arguments is CallBack Function
let calculator=(a, b, operator)=>{
return operator(a, b)
}
console.log(calculator(10,5, div));

