 // for import the node-js files from another location
// const exportData1=require('./exportData1')
// console.log(exportData1);

// //first way to see the result
// const math=require('./exportData1')
// console.log('addition = ',math.add(5, 5));
// console.log('subtraction = ',math.sub(5, 5));
// console.log('multiplication = ',math.mul(5, 5));
// console.log('division = ',math.divide(5, 5));
// console.log('modulous = ',math.mod(5, 5));

//second way to see the result
const {add, sub, mul, divide, mod, name}=require('./exportData1')
console.log('addition = ',add(5, 5));
console.log('subtraction = ',sub(5, 5));
console.log('multiplication = ',mul(5, 5));
console.log('division = ',divide(5, 5));
console.log('modulous = ',mod(5, 5));
console.log('name = ',name); 
