
// module.exports={
//     NAME:'Hurarah',
//     AGE:23,
//     LOCATION:'LHR',
//     AIM:'Soft. engineer',
//     TECHNOLOGY:'NODE-JS'
// }

// 1. addition
const add = (a, b) => {
    return a + b;
}

// 2. subtraction
const sub = (a, b) => {
    return a - b;
}

// 3. multiplication
const mul = (a, b) => {
    return a * b;
}

// 4. division
const divide = (a, b) => {
    return a / b;
}
 
// 5. modulous
const mod = (a, b) => {
    return a % b;
}

// //first way to write the objects
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.divide = divide;
// module.exports.mod = mod;

//second way to write the objects
const name='hurarah';
module.exports={add, sub, mul, divide, mod, name}

 