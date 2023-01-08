console.log('DATE AND TIME');

/*
1. getDay()             || Get Date
2. getDate()            || Get Date
3. getMonth()           || Get Date
4. getFullYear()        || Get Date
5. setDate()            || Set Date
6. setMonth()           || Set Date
7. setFullYear()        || Set Date

8. getTime()            || Get Time
9. getHours()           || Get Time
10.getMinutes()         || Get Time
11.getSeconds()         || Get Time
12.getMilliseconds()    || Get Time
13.setHours()           || Set Time
14.setMinutes()         || Set Time
15.setSeconds()         || Set Time

*/


// Today date
let todayDate = new Date()
console.log(todayDate);
console.log('DATE STRING = ', todayDate.toDateString());
console.log('LOCAL DATE STRING = ', todayDate.toLocaleDateString());
console.log('LOCAL STRING = ', todayDate.toLocaleString());
console.log('STRING = ', todayDate.toString());
console.log('JSON = ', todayDate.toJSON());
console.log('JSON & SLICE = ', todayDate.toJSON().slice(0, 10));
                                 //2ND METHOD OF CONVERSION DATE INTO VALID FORMAT
// let todayDate=Date.now()
// console.log(todayDate);
// let convertDate=new Date(todayDate)
// console.log(convertDate.toString());


// Today Time
let todayTime = new Date()
console.log(todayTime);
console.log('TIME STRING = ', todayTime.toTimeString());
console.log('LOCAL TIME STRING = ', todayTime.toLocaleTimeString());
console.log('JSON & SLICE = ', todayTime.toJSON().slice(11, 19));





// Set manually date and time
let manualDate = new Date('04/11/1999 11:04:30');
console.log(manualDate);


// Get date methods
let pick;
pick = manualDate.getDay();
pick = manualDate.getDate();
pick = manualDate.getMonth();
pick = manualDate.getFullYear();
console.log(pick);
// Set date methods
pick = manualDate.setDate(15);
pick = manualDate.setMonth(2);
pick = manualDate.setFullYear(2000);
console.log(pick);



// Get time methods
pick = manualDate.getTime();
pick = manualDate.getHours();
pick = manualDate.getMinutes();
pick = manualDate.getSeconds();
pick = manualDate.getMilliseconds();
console.log(pick);
// Set time methods
pick = manualDate.setHours(15);
pick = manualDate.setMinutes(5);
pick = manualDate.setSeconds(15);
console.log(pick);




/*
IMPORTANT QUESTION NO 1:
Find the today month name?
*/
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const nowMonth = new Date()
let result = months[nowMonth.getMonth()]
console.log(result);



// /*
// IMPORTANT QUESTION NO 2:
// Show live time?
// */
// let time = () => {
//     setInterval(() => {
//         const nowTime = new Date()
//         console.log(nowTime.toLocaleTimeString());
//     }, 1000);
// }
// time()  
