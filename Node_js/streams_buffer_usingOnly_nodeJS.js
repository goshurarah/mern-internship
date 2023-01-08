const http = require('http')
const fs = require('fs')
const { pipeline } = require('stream')

let server = http.createServer((req, resp) => {
    // // 1. for read the all data
    // fs.readFile('streams_buffer_usingOnly_nodeJS.txt', (error, data) => {
    //     if (error) {
    //         console.log('error is found')
    //     } else {
    //         resp.write(data.toString())
    //         resp.end()
    //     }

    // })


    // //2. for read data that in stream way
    // const readStream=fs.createReadStream('streams_buffer_usingOnly_nodeJS.txt')
    // readStream.on('data',(chunkData)=>{
    //     resp.write(chunkData)
    // })

    // readStream.on('end',()=>{
    //     resp.end()
    // })

    // readStream.on('error',(error)=>{
    //     resp.write('File not Found')
    //     resp.end();
    // })


    //3. for read data in stream method in quick way
    const readStream=fs.createReadStream('streams_buffer_usingOnly_nodeJS.txt')
    readStream.pipe(resp)
})
server.listen(4500, '127.0.0.1', () => {
    console.log('server is listening to the port 4500')
})