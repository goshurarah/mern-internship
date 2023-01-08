const http=require('http')
const fs=require('fs')

const path=require('path')
const pathData=path.join(__dirname, 'html_pages')

http.createServer((req, resp)=>{
    if(req.url=='/')
    {
    fs.readFile(`${pathData}/table1.html`, (error, data)=>{
        if(error){
            console.log('error is found!');
        }else{
            resp.write(data)
        }
        resp.end()
    })
}
}).listen(7679,()=>{
    console.log('server is listening to the port 7679');

})
