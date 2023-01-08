const EventEmitter=require('events');
const event=new EventEmitter();
 
const express=require('express');
const app=express();

let count=0;
event.on('APIcount',()=>{
    count++;
    console.log('Clicked in this counting = ', count);
})

//1st route
app.get('', (req, resp)=>{
    resp.send('home-eventEmitter')
    event.emit('APIcount')
    
})

//2nd route
app.get('/about', (req, resp)=>{
    resp.send('about-eventEmitter')
    event.emit('APIcount')

})
//3rd route
app.get('/help', (req, resp)=>{
    resp.send('help-eventEmitter')
    event.emit('APIcount')
})
app.listen(5400,()=>{
    console.log('server is running');
})