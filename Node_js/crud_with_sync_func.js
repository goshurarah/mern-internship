const fs=require("fs")

// //create
// fs.writeFileSync('curd_sync.txt', 'this is sync curd file')


//read
const readData=fs.readFileSync('curd_sync.txt', 'utf-8')
console.log(readData);



// //append
// fs.appendFileSync('curd_sync.txt', ', this is sync append data')



// //rename
// fs.renameSync('curd_sync.txt', 'renamedCurd_sync.txt')



// //delete
// fs.unlinkSync('curd_sync.txt')
