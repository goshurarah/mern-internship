console.log('STRING AND ITS METHODS');

//simple method of string concatenate
const mystr="Hurarah "
const my2str= "is a good boy"
console.log(mystr+my2str);

//string methods
// 1. concat()
// 2. toLowerCase()
// 3. toUpperCase()
// 4. length()
// 5. split()
// 6. replace()

let html="He is a good man and a professional software  engineer";
console.log(html);

console.log(html.concat(" (Right statement)"));

console.log(html.toLowerCase());

console.log(html.toUpperCase());

console.log("String length is = " +html.length);

console.log(html.split(' '));

console.log(html.replace('He', 'Him'));


// Tempalte leterals
let identity='Hurarah';
let age=23;
let description='software engineer';

let myHtml=`<h2> Info Of a Student</h2>
${identity} is a good boy
His age is ${age} 
He is a professional ${description}`;
document.body.innerHTML=myHtml;
