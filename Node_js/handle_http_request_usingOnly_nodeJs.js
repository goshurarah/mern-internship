
const http=require('http')


const objmessage={
    message:'<h3>404 NOT FOUND!<br>Please enter correct URL</h3>'}

    

http.createServer((request, response) => {
    if (request.url == '/') {
        response.write('<h1>This is Home Page</h1>')
        response.end();
    }
    else if (request.url == '/about') {
        response.end('<h1>This is About Page</h1>');
    }
    else {
        response.writeHead(404, {'Content-Type' : 'text/html'})
        response.write(objmessage.message)
        response.end()
    }
}).listen(1464,()=>{
    console.log('server is running');
});