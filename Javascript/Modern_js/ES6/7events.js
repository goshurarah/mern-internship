console.log('EVENTS');


/*
Three ways of writing event in JS
1. using inline event alert() and like as (onclick="function name")
2. by call back function
3. using addEventListener()

Parametrs of addEventListner
1. click
2. dblclick 
3. mouseenter         || MouseEvent
4. mouserleave        || MouseEvent
5. mousedown          || MouseEvent
6. mouseup            || MouseEvent
7. mousemove          || MouseEvent
8. input 
9. onchange
10.setTimeout()       || return execution once then stop
11.setInterval()      || return execution continously and cannot stop
12.clearTimeout()     || return stop the execution
13.clearInterval()    || return stop the execution
*/


// //events object
// const testChild = document.getElementById('parent-1')
// testChild.addEventListener('click', (event) => {
//     let showResult = event
//     // let showResult = event.target
//     // let showResult = event.type
//     console.log(showResult);
// })



// //click event
// const child1 = document.getElementById('parent-1')
// child1.addEventListener('click', (event) => {
//     let changeColor = document.getElementById('parent-1')
//     changeColor.style.color = 'red'
// })

// const child2 = document.getElementById('parent-2')
// child2.addEventListener('click', () => {
//     let changeColor = document.getElementById('parent-2')
//     changeColor.style.color = 'khaki'
// })

// const child3 = document.getElementById('parent-3')
// child3.addEventListener('click', () => {
//     let changeColor = document.getElementById('parent-3')
//     changeColor.style.color = 'blue'
// })


// //dblclick event
// const child1 = document.getElementById('parent-1')
// child1.addEventListener('dblclick', (event) => {
//     let changeColor = document.getElementById('parent-1')
//     changeColor.style.color = 'red'
// })


// // mouseenter event
// const child1 = document.getElementById('parent-1')
// child1.addEventListener('mouseenter', () => {
//     console.log('mouse enter');
// })


// //mouseleave event
// const child1 = document.getElementById('parent-1')
// child1.addEventListener('mouseleave', () => {
//     console.log('mouse leave');
// })


// //mouseup event
// const child1 = document.getElementById('parent-1')
// child1.addEventListener('mouseup', () => {
//     console.log('mouse up');
// })


// //mousedown event
// const child1 = document.getElementById('parent-1')
// child1.addEventListener('mousedown', () => {
//     console.log('mouse down');
// })


// //mousemove event
// let screenFunc = (event) => {
//     document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, ${event.offsetX + event.offsetY})`;
// }
// let screen = document.querySelector('.bodyContainer').addEventListener('mousemove', screenFunc);



// //setTimeout method
// let child1 = document.getElementById('parent-1')
// let timeOutFunc = () => {
//     child1.innerText = 'Loading...'
//     setTimeout(() => {
//         let changeColor = document.getElementById('parent-1')
//         changeColor.innerText = 'Child-1'
//         changeColor.style.color = 'red'
//     }, 3000);
// }
// child1.addEventListener('click', timeOutFunc)




// //setInterval method
// let child1 = document.getElementById('parent-1')
// let count = 0
// let intervalFunc = () => {
//     child1.innerText = 'Loading...'
//     setInterval(() => {
//         let changeNumber = document.getElementById('parent-1')
//         changeNumber.innerHTML = `${count} = Child-${count}`
//         count++;
//         changeNumber.style.color = 'red'
//     }, 1000);
// }
// child1.addEventListener('click', intervalFunc)
