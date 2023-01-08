console.log('FOR EACH LOOP');

//1. here is for each loop is performing in simple way
let myNewArr2 = [4, 45, 3, 2, 45, 323, 23445, 2334, 342];
for (let i = 0; i < myNewArr2.length; i++) {
    console.log(myNewArr2[i]);
}


//2. here is for each loop is performing with latest method/fat arrow function
let myNewArr = [4, 45, 3, 2, 45, 323, 'huararh'];
myNewArr.forEach((element) => { console.log(element); })


//3. here we see all results about array using for each
let js_array = ['carbohydrates', 'fats', 'lipids', 'vitamins', 'protein']
js_array.forEach((element, index, array) => {
    console.log(element, index, array);
});
