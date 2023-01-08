const fs=require("fs")

// //create
// fs.writeFile('curd_Async.txt', 'this is Async curd file', (err)=>{
//     console.log('error is found');
// })


//read
fs.readFile('crud_Async.txt','utf8', (err, data)=>{
    console.log(data);
})



// //append
// fs.appendFile('curd_Async.txt', ', this is Async append data', (err)=>{
//     console.log('append');
// })



// //rename
// fs.rename('curd_Async.txt', 'renamedCurd_Async.txt',(err)=>{
//         console.log('renamed');
//     } )



// //delete
// fs.unlink('curd_Async.txt', (err)=>{
//     console.log('delete');
// })
