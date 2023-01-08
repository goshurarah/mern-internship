console.log('EVENT PROPAGATION');
/*
                            EVENT PROPAGATION
1. it tells the order of event
2. it divide it into 2 parts

1st is EVENT CAPTURING  || move from top to bottom like as event call as this order(head then body then parent then child tag)
2nd is EVENT BUBBLING    || move from bottom to top like as event call as this order(child tag then parent tag then body then head)

                            IMOPTANT NOTE=> BY DEFAULT IT IS EVENT BUBBLING
*/


let parent = document.querySelector('.parent')
let child = document.querySelector('.child')

let parentFunc = () => {
    alert('Parent Notification')
}
let childFunc = (event) => {
    alert('Child Notification')
    // event.stopPropagation() // for stop event bubbling
}

parent.addEventListener('click', parentFunc)
child.addEventListener('click', childFunc)


// //bellow true parameter for event capturing
// parent.addEventListener('click', parentFunc, true)
// child.addEventListener('click', childFunc, true)
 