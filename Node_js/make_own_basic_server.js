const http = require('http');

//1. simple method/asynchronouly/call-back function or fat arrow-function
http.createServer((request, response) => {
    response.write(`<h3>Hello! Welcome to my web page</h3>`);
    response.end();
}).listen(420, () => {
    console.log('server is running');
});




// //2. functional method
// function server(request, response)
// {
//     response.write(`<h3>Hello! Welcome to my web page</h3>`);
//     response.end();
// }
// http.createServer(server).listen(420);






// //3. variable initialization method
// const server =http.createServer((request, response)=>
// {
//     response.write(`<h3>Hello! Welcome to my web page</h3>`);
//     response.end();
// })
// //bellow 127.0.0.1 is IP of localhost/ you can write 127.0.0.1:420 to run your browser for resposne
// server.listen(420, '127.0.0.1',()=>{
//     console.log("server is running");
// });





// //4. variable initialization method updated
// const server =http.createServer()

// server.on((request, response)=>
// {
//     response.write(`<h3>Hello! Welcome to my web page</h3>`);
//     response.end();
// })
// //bellow 127.0.0.1 is IP of localhost/ you can write 127.0.0.1:420 to run your browser for resposne
// server.listen(420, '127.0.0.1',()=>{
//     console.log("server is running");
// });