// console.log('DOM AND BOM');

// /*
// DOM: Document Object Model
// In dom, we work with html/web document like (html tags, head/body/elements/tags) 
// we use these methods in dom (gebi, gebcn, gebtn, qs)

// BOM: Browser Object Model
// In bom, we work with browser/window like (location, history, inner/outer height,
// alert, prompt, confirm etc...) 
// */

// //                                      DOM Methods
// let dom = document;
// dom = document.getElementById();
// dom = document.querySelector();
// dom = document.getElementsByClassName();
// dom = document.getElementsByTagName()
// dom = document.head;
// dom = document.body;
// dom = document.style.body;   
// dom = document.links;
// dom = document.images;
// dom = document.scripts;
// console.log(dom);

// let changeColor=document.querySelector('.parent-1')
// changeColor.style.color='blue'

// let changeColor=document.getElementById('parent-1')
// changeColor.style.color='yellow'


// // dom links/dom crawler
// let str = 'google'
// let url = document.links;
// Array.from(url).forEach((elements) => {
//     if (elements.href.includes(str)) {
//         console.log(elements.href);
//     }
//     else {
//         console.log('Not found this link');
//     }
// });




// // dom images
// let img = document.images;
// Array.from(img).forEach((elements) => {
//     console.log(elements);
// });


// // dom scripts
// let scrpt = document.scripts;
// Array.from(scrpt).forEach((elements) => {
//     console.log(elements);
// });

// //                                     DOM CRUD OPERATION
// //create
// let ol = document.createElement('ul')
// ol.className='ol-class'
// ol.setAttribute('title', 'listClass')

// let li1 = document.createElement('li')
// let text1 = document.createTextNode('ALi')
// li1.appendChild(text1)
// let li2 = document.createElement('li')
// let text2 = document.createTextNode('Hurarah')
// li2.appendChild(text2)

// ol.appendChild(li1)
// ol.appendChild(li2)

// let selecter = document.querySelector('#parent-1')
// selecter.appendChild(ol)
// console.log(selecter);

//replace/update
// let newLi1=document.createElement('li')
// let newText1=document.createTextNode('Hamza')
// newLi1.appendChild(newText1)

// li1.replaceWith(newLi1)

// // remove/delete
// li2.remove()





// //                                  BOM METHOD
// let a=window;
// a=alert('Click! Ok button for further process');
// a=prompt('Enter the keyword (Okay)');
// a=confirm('Are you sure you want to delete this content!');
// a=innerHeight;
// a=innerWidth;
// a=scrollX;
// a=scrollY;
// a=location;
// a=location.toString();
// a=history;
// a=history.back();
// a=history.length;
// a=window.print();
// console.log(a);
