/*
                    IMPORTANT NOTE!

1. IN TEMPLATE ENGINE, HTML FILES SHOULD BE WRITTEN IN (.ejs) EXTENSION
2. EJS STAND FOR EMBEDED JAVA-SCRIPT
3. WE USE EJS FOR USING JS IN HTML FILE BY USING THIS SYMBOLS (<%= (OBJECT NAME)%>)
4. (<%= (OBJECT NAME)%>, HERE (=) MEANS THAT  THIS SYMBOL DISPLAY OBJECT OF JS FILE ON WEB PAGE
5. (<%- include(OBJECT NAME)%>, HERE (-) MEANS THAT  THIS SYMBOL DISPLAY TAG OF ANOTHER EJS WEB FILE IN CURRENT EJS WEB FILE.
 
*/

const path = require('path')
const express = require('express');

const filePath = path.join(__dirname, 'html_pages')
// const renamedviews=path.join(__dirname, 'renamedviews')
const app = express()


// SET METHOD tells, ejs file is written in views folder
//1 . first page
app.set('view engine', 'ejs')
// //for rename the views folder
// app.set('views', renamedviews)

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
    // //                  OR 2ND METHOD
    // response.render('profile_page', {
    //     name: 'Hurarah',
    //     age: 23,
    //     email: 'hurarahjutt786@gmail.com',
    //     adress: 'LHR',
    //     gender: 'M',
    //     skills: ['JavaScript', 'Node.JS', 'Express.JS', 'MongoDB', 'Bootstrap', 'CSS', 'HTML', 'Full Stack Developer']
    // }) 
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

app.get('/*', (resquest, response) => {

    response.sendFile(`${filePath}/404file.html`)
})

app.listen(8989, () => {
    console.log('server is running');
})