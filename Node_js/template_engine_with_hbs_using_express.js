const express = require('express');
const app = express()
const hbs=require('hbs')
const path=require('path')

const template=path.join(__dirname, 'template/views')
const partials=path.join(__dirname, 'template/partials')

app.set('view engine', 'hbs')
app.set('views', template)
hbs.registerPartials(partials)


 

app.get('/profile', (resquest, response) => {
    const user_info = {
        name: 'HURARAH',
        age: 23,
        email: 'hurarahjutt786@gmail.com',
        adress: 'LHR',
        gender: 'M',
        skills: ['JavaScript', 'Node.JS', 'Express.JS', 'MongoDB', 'Bootstrap', 'CSS', 'HTML', 'Full Stack Developer']
    }
    response.render('profile_page', { user_info })
    })

// 2 .  second page 
app.get('/login', (resquest, response) => {
    const user_info = {
        name: 'HURARAH',
        age: 23,
        email: 'hurarahjutt786@gmail.com',
        adress: 'LHR',
        gender: 'M',
        skills: ['JavaScript', 'Node.JS', 'Express.JS', 'MongoDB', 'Bootstrap', 'CSS', 'HTML', 'Full Stack Developer']
    }
    response.render('login_page', { user_info })
})

app.listen(8999, () => {
    console.log('server is running');
})