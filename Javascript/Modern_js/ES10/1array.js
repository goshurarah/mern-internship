console.log('ARRAY');


// //Convert 2d array into 1d/single/flatten array
// let hugeArray = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10,[11,12]]]
// let map = hugeArray.map((elements, index, array) => {
//     return elements
// })
// map.reduce((accumulator, elements, index, array) => {
//     return accumulator.concat(elements)
// })
// console.log(map);



//Convert (2d/more than 2d/3rd/multi-deimensional array)  into 1d/single/flatten array
let twoD = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10,[11,12]]]
let map = twoD.map((elements, index, array) => {
    return elements
})
// console.log(map.flat());//for 2d array
// console.log(map.flat(2));//for 3d array
console.log(map.flat(Infinity));//for multi-dimensional array