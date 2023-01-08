console.log('ARRAY AND ITS METHODS');

// /*
//                                     ARRAYS METHODS
// 
// 1. indexOf()     || bellow traversal methods of array
// 2. lastIndexOf() || bellow traversal methods of array
// 3. includes()    || bellow traversal methods of array

// 4. find()        || bellow finding methods of array
// 5. findIndex()   || bellow finding methods of array
// 6. filter()      || bellow finding methods of array

// 7. sort()        || bellow sorting methods of array

// bellow CRUD operation methods of array
// 8. push()        || create
// 9. unshift()     || create
// 10. splice()     || create

// 11. slice()      || read
// 12. split()      || read

// 13. splice()     || update

// 14. pop()        || delete
// 15. shift()      || delete
// 16. splice()     || delete
// 17. map().reduce().filter().sort()    || IMPORTANT METHODS IN ARRAY
// 18. array destructuring    
// 19. spread operator       
// 20. rest operator  
// */



// /* 
// 1.                                      indexOf()
// it moves forward at the searching time
// tells that if element exist in given array, it will give index number
// if it is not exit in an array, it will return (-1)
// =>indexOf(value of element)
// =>indexOf(value of element, index number)
// */
// let myArray1 = ['ahmad', 'ali', 'kamran', 'ahmad', 'huzaifa', 'ahmad']
// console.log(myArray1.indexOf('ahmad'));
// console.log(myArray1.indexOf('ahmad', 4));
// console.log(myArray1.indexOf('talha'));//this is not exit in array,it returns (-1)



// /* 
// 2.                                    lastIndexOf()
// it moves backward at the searching time
// tells that if element exist in given array, it will give index number
// if it is not exit in an array, it will return (-1)
// =>lastIndexOf(value of element)
// =>lastIndexOf(value of element, index number)
// */
// let myArray2 = ['ahmad', 'ali', 'kamran', 'ahmad', 'huzaifa', 'ahmad']
// console.log(myArray2.lastIndexOf('ali'));
// console.log(myArray2.lastIndexOf('ahmad', 4));
// console.log(myArray2.lastIndexOf('talha'));//this is not exit in array,it returns (-1)



// /* 
// 3.                                    includes()
// it moves forward at the searching time
// tells that if element exist in given array, it will give boolean value (true/false)
// =>includes(value of element)
// */
// let myArray3 = ['ahmad', 'ali', 'kamran', 'ahmad', 'huzaifa', 'nazam']
// console.log(myArray3.includes('huzaifa'));
// console.log(myArray3.includes('ahsan'));
// console.log(myArray3.includes('ahmad', 2));



// /* 
// 4.                                        find()
// it always check the value of array from (left to right) side of the array
// it give only one element
// tells that if the condition will true it will give only one element
// */
// let priceOfProducts = [45, 24, 67, 43, 23, 78, 100]

// const result1 = priceOfProducts.find((calcVal) => {
//     return calcVal > 50
// })
// console.log(result1);



// /* 
// 5.                                        findIndex()
// it always check the value of array from (left to right) side of the array
// it give index number
// tells that if the condition will true it will give index number
// if condition does not true, it returns (-1)
// */
// let priceOfProducts2 = [45, 24, 67, 46, 23, 78, 100]

// const result2 = priceOfProducts2.findIndex((calcVal2) => {
//     return calcVal2 < 46
// })
// console.log(result2);



// /*
// 6.                                        filter()
// it give a new array with all elements 
// if the condition/function will be true, it will give all elements within an array
// if the condition/function will be false, it will give empty array
// */
// let filterPrice = [45, 24, 67, 46, 23, 78, 100]

// const outPut = filterPrice.filter((data) => {
//     return data > 46
//     // return data < 46
//     // return data < 100
//     // return data > 100 // it will give emplty array
// })
// console.log(outPut);



// /*
// 7.                                        sort()
// it give a new array with all elements with sorting form
// firtsly it convert all data types into string, then it will sorted by using
// first alphabet/(not word) in ascending way
// it is suitable for string data and not suitable for numbers
// =>sort()
// */
// let sortStr = ['c', 'a', 'f', 'b', 'd', 'j', 'm', 'a']
// console.log(sortStr.sort());

// //bellow compiler firstly convert numbers into strings then acsending it in such a way (e.g [100,25]. here 100 is smaller than 25 beacuse 1 is smaller than 2)
// let sortNumb = [45, 24, 67, 46, 23, 78, 100]
// console.log(sortNumb.sort());



// /*
// 8.                                        push()
// it is create/post/inert method/it add the elements in the last of array
// and it returns a new array of all elements
// =>push(number of elements)
// */
// let postVeg = ['potatos', 'tomatos', 'garlic']
// postVeg.push('carrot', 'greenChilly','greenChilly')
// console.log(postVeg);



// /*
// 9.                                        unshift()
// it is create/post/inert method/it add the elements in the start/beginning of array
// and it returns a new array of all elements
// =>unshift(number of elements)
// */
// let postFruit = ['bnana', 'apple', 'mango']
// postFruit.unshift('orange','stawBerry')
// console.log(postFruit);



// /*
// 10.                                        splice()
// it is create/post/insert method/it add the elements in the everyWhere in an array
// and it returns a new array of all elements
// =>splice(number of index, number of elements, element, element,...)
// */
// let postFruit = ['bnana', 'apple', 'mango']
// postFruit.splice(1, 0,'orange','stawBerry')
// console.log(postFruit);


// /*
// 11.                                        slice()
// it is get/read method/it copied an array and return as it is and don't change the array 
// =>slice(start number of index, till number of index)
// */
// let getFruit = ['bnana', 'apple', 'mango','almond', 'nut']
// let result=getFruit.slice(2,3)
// console.log(result);


// /*
// // 12.                                        split()
// // it is get/read method/it split data into parts 
// // firstly data convert into string then get result
// // split() can convert string into array and array into string ny using (toArray()/toString())
// // =>split(character, limit)
// // */
// let sptFruit = ['bnana', 'apple', 'mango']
// let strData=sptFruit.toString()
// console.log(strData.split(",",3));



// /*
// 13.                                        splice()
// it is put/update method/it update the elements in the everyWhere in an array
// and it returns a new array of all elements
// =>splice(number of index, number of elements, element, element,...)
// */
// let putFruit = ['bnana', 'apple', 'mango']
// let result=putFruit.splice(1, 1, 'Apple')
// console.log(result);
// console.log(putFruit);
//                  2nd method by if-else
// let putFruit = ['bnana', 'apple', 'mango']
// let indexOfFruit = putFruit.indexOf('mango')
// if (indexOfFruit !== -1) {
//     let result = putFruit.splice(indexOfFruit, 1, 'Mango')
//     console.log(result);
//     console.log(putFruit);
// }



// /*
// 14.                                        pop()
// it is delete/remove method/it del/rem the elements in the last of array
// and it returns a new array of all elements
// =>pop()
// */
// let delVeg = ['potatos', 'tomatos', 'garlic','cabbage']
// console.log(delVeg.pop());
// console.log(delVeg);



// /*
// 15.                                        shift()
// it is delete/remove method/it del/rem the elements in the start/beginning of array
// and it returns a new array of all elements
// =>shift()
// */
// let delFruit = ['bnana', 'apple', 'mango','orange']
// console.log(delFruit.shift());
// console.log(delFruit);


// /*
// 16.                                        splice()
// it is delete method/it del/rem the elements in the everyWhere in an array
// and it returns a new array of all elements
// =>splice(number of index, number of elements)
// */
// let delFruit = ['bnana', 'apple', 'mango', 'orange', 'stawberry']
// let result=delFruit.splice(2, 2)
// console.log(result);
// console.log(delFruit);
// //                  2nd method by if-else
// let delFruit = ['bnana', 'apple', 'mango']

// let indexOfFruit = delFruit.indexOf('apple')
// if (indexOfFruit !== -1) {
//      let result = delFruit.splice(indexOfFruit, 1)
//      // bellow method delete all data after selected index
//     //  let result = delFruit.splice(indexOfFruit, Infinity)
//      console.log(result);
//      console.log(delFruit);
//  }



// /*
// 17.                                        map()
// it allows to iterate over an array and modify its elements using callBack function
// it returns an array of an elements
// both methods (map() and forEach()) are work on iterations of an array
// but major difference is that map() return array and forEach() return undefined
// further you can attach reduce().sort().filter() with map()
// 2nd method using for each loop: it also iterates an array but not return an array
// =>map(elements, index, array)
// */
// const mixArray=[1, 2, 3, 4, 5, 6, 7,'ali','haider','kamran','hurarah','akbar',]
// let get= mixArray.map((elements, index, array)=>{
// return `ELEMENT = ${elements} | INDEX = ${index} | ARRAY = ${array}`
// })
// console.log(get);
//                  2nd method by for-each
//  const mixArray=[1, 2, 3,4 , 5, 6 , 7,'ali','haider','kamran','hurarah','akbar',]
//  mixArray.map((elements, index, array)=>{
//  console.log(`ELEMENT = ${elements} | INDEX = ${index} | ARRAY = ${array}`);
//  })



// /*
// 17.                                        reduce()
// it convert the 3d or 2d array into 1d/single/flatten array
// in bellow parameter (accumulator) is the executeable array of filter method
// =>reduce(accumulator, elements, index, array)
// */
// const mixArray = [1, 2, 3, 4, 5, 6, 7]
// let get = mixArray.map((elements, index, array) => {
//     return elements * 2
// }).filter((value) => {
//     return value > 10
// }).reduce((accumulator, elements, index, array) => {
//     return accumulator += elements
//     // return accumulator-=elements
//     // return accumulator*=elements
//     // return accumulator/=elements
//     // return accumulator%=elements
// })
// console.log(get)




// //18.                                   Array destructuring
// let bio = ['hurarah', 'akbar', 'lhr', 25]
// let [Mname, Fname, city, age] = bio;
// console.log(city);
//                                   2nd METHOD
// let bio = [Mname='hurarah', Fname='akbar', city='lhr', age=25]
// console.log(city);




// //19.                                Spread operator
// let color=['red','green','yellow','blue','parrot','grey']
// let newColor=[...color,'khaki', 'gold', 'brown']
// console.log(newColor);



// //20.                                rest operator
// function fun(a, b, ...c) {
//     console.log(`${a} ${b}`);
//     console.log(c);
//     console.log(c[0]);
//     console.log(c.length);
//     console.log(c.indexOf('pele'));
// }
// fun('ronaldo', 'messi', 'edan', 'pele', 'hurarah')




// /*
// IMPORTANT QUESTION NO 1:
// Find the square root of each element in an array?
// */
// let value=[25, 36, 49, 64, 81]

// let map=value.map((elements, index, array)=>{
//     return `SQUARE ROOT OF ${elements} = ${Math.sqrt(elements)}`
// })
// console.log(map);




// /*
// IMPORTANT QUESTION NO 2:
// Multiply each element in an array with 2 and return only those elements  which are greater that 10
// */
// let value=[2,3,4,6,8]
// let map=value.map((elements, index, array)=>{
// return elements*2
// }).filter((greaterValue)=>{
//     return greaterValue>10
// })
// console.log(map);




// /*
// IMPORTANT QUESTION NO 3:
// Convert 2d or 3d array into 1d/flatten/single array
// */
// let hugeArray = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10,[11, 12]]]
// console.log(hugeArray.flat()); //for convert 2D array into 1d/flatten array
// console.log(hugeArray.flat(2)); //for convert 3D array into 1d/flatten array
// console.log(hugeArray.flat(Infinity));//for multi-dimensional array

//                                  2ND METHOD
// let map = hugeArray.map((elements, index, array) => {
//     return elements
// }).reduce((accumulator, elements, index, array) => {
//     return accumulator.concat(elements)
// })
// console.log(map);