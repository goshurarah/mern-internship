console.log('FOR IN LOOP AND FOR OF LOOP');


//1. for in loop to see the index number of an element
let inArray2 = ['carbohydrates', 'fats', 'lipids', 'vitamins', 'protein']
for (let elements in inArray2) {
    console.log(elements);
}
 
//2. for of loop to see the elements of array
let inArray3 = ['carbohydrates', 'fats', 'lipids', 'vitamins', 'protein']
for (let elements of inArray3) {
    console.log(elements);
}