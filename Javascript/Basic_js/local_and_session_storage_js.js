console.log(`

Local And Session Storage In JS`);
/*
                                IMPORTANT NOTE
   1. IN LOCAL STORAGE, DATA/VALUE IN KEY IS ALWAYS/PERMANENT STORE/NO EXPIRE LIMIT, EVEN THAT YOU REMOVE THE LOCALSTORAGE CODE THEN IT ALSO BE NOT REMOVE FROM BROWSER
   EXCEPT WE WRITE THE LOCALSTORAGE.CLEAR() METHOD, IT WILL REMOVE PERMANENTALLY

   2.IN SESSION STORAGE, DATA/VALUE IN KEY IS NOT ALWAYS/PERMANENT STORE
   EVEN THAT YOU REMOVE THE SESSIONSTORAGE CODE THEN IT ALSO BE  REMOVE FROM BROWSER
   WHEN WE WRITE THE SESSIONSTORAGE.CLEAR() METHOD/REMOVE THE CODE, IT WILL REMOVE PERMANENTALLY FROM SESSION STORAGE/BROWSER
 */

//1.LOCAL STORAGE


//Add the key value in local storage by using setitem function
                        //or
//setItem store the value in local storage
localStorage.setItem('Name1','Hurarah');
localStorage.setItem('Name2','Ali');
localStorage.setItem('Name3','Huzaifa');
// localStorage.clear()  //It clear/remove the entire/all/all-key storage
// localStorage.removeItem('Name3') // It remove the particularly /selected key from local storage

//Invoke/retrieve the key from local storage by using getitem function
                        //or
//getItem took the value from local storage
let getName=localStorage.getItem('Name1');
console.log(getName);

//HERE add the array in the local storage 
// without use of JSON.stringify method, array store in local storage in string type
let vegArray=['onion', 'carrot', 'potato', 'tomato', 'chilly', 'chicken', 'reddish' ];
// with use of JSON.stringify method, we can storage array in object type
localStorage.setItem('Vegetables', JSON.stringify(vegArray));


//getItem took the value from local storage
let getName2=localStorage.getItem('Vegetables');
console.log(getName2);
// without use of JSON.parse method, array get from local storage in string type
// with use of JSON.parse method, we can get array in object type
getName2=JSON.parse(localStorage.getItem('Vegetables'))
console.log(getName2);

//2.SESSION STORAGE

sessionStorage.setItem('sessionName1','sHurarah');
sessionStorage.setItem('sessionName2','sAli');
sessionStorage.setItem('sessionName3','sHuzaifa');
// sessionStorage.clear()  //It clear/remove the entire/all/all-key storage
// sessionStorage.removeItem('sessionName3') // It remove the particularly /selected key from session storage

let getName3=sessionStorage.getItem('sessionName1');
console.log(getName3);
