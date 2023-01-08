const txtColor=require('colors')
console.log(`
CURD STAND FOR (Create, Update, Read, Delete)`.bgGreen);

//import file system
const fs=require('fs');
//import file path
const path=require('path');
const filePath=path.join(__dirname, 'crud');


// 1. Create method
const fileData=`${filePath}/NewFile1.txt`;
// fs.writeFileSync(fileData, 'This is a new file')


// 2. Read method in two ways 1=readdir() and 2 =readFile()
// 1.readdir()
fs.readdir(filePath, (error, files)=>
{
    console.log(files)
});
// 2.readFile()
fs.readFile(fileData, 'utf8', (error, files)=>
{
    console.log(files)
});


// 3. Update method in two ways 1=appendFile() and 2 =rename()
// 1.appendFile()
// fs.appendFile(fileData, ' this is the append data', (error)=>{

//     if(!error) 
//     console.log('File is updated'.bgGreen);
// })
// 2.rename()
// fs.rename(fileData,`${filePath}/renamedFile.txt`, (error)=>{

//     if(!error) 
//     console.log('File is renamed'.bgGreen);
// })


// 4. Delete method
// fs.unlinkSync(fileData)
// console.log('File is successfuly deleted'. bgMagenta);
