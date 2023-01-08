
//for finding the path
console.log('------>>>',__dirname);
console.log('------>>>',__filename);


const path=require('path')
// console.log(path.basename('D:/Hurarah/Web internship/Node_js/filePath.js'));
// console.log(path.dirname('D:/Hurarah/Web internship/Node_js/filePath.js'));
// console.log(path.extname('D:/Hurarah/Web internship/Node_js/filePath.js'));





//here you will see all info about file
// console.log(path.parse('D:/Hurarah/Web internship/Node_js/filePath.js'));







//here you will see all info about file with write there object name
console.log(`

FILE DETAILS
`);
let pathData=path.parse('D:/Hurarah/Web internship/Node_js/filePath.js');
console.log(pathData);
console.log(pathData.root);
console.log(pathData.dir);
console.log(pathData.base);
console.log(pathData.ext);
console.log(pathData.name);