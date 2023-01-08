const colors=require('colors')
console.log(`MIDDLEWARE NODE/APPLICATION-LEVEL MIDDLEWARE`.bgYellow);

const path=require('path')
const express=require('express');

const filePath=path.join(__dirname, 'html_pages')
const app=express();

/*
            IMPORTANT NOTE!

1. MIDDLEWARE FUNCTION: are that function that have access to the request object (request), the response object (response)  and the next middleware function in the application's request-response cycle.
2. The next middleware function is commonly denoted by a variable named next().
3. MIDDLEWARE FUNCTION helps developers build application more effciently. it act
like as a connectivity between application, data and user.


                TYPES OF MIDDLEWARE
HERE, most abundant/ mainly types of middleware function are as follows:

1. APPLICATION-LEVEL middleware
2. ROUTE-LEVEL middleware
3. ERROR-HANDLING middleware
4. BUILD-IN middleware
5. THIRD-PARTY middleware

*/


// APPLICATION-LEVEL middleware work here!

const reqFilter=(request, response, next)=>{
    if(!request.query.age)
    {
        response.send(`<script>
            const message=alert('Enter Your Age In URL In This Format (?age=any number) For Access This Web Page');
            console.log(message);
        </script>`)
    }
    else if(request.query.age<18)
    {
        response.send(`<script>
            const message=alert('Under 18! You Cannot Access This Web Page');
            console.log(message);
        </script>`)
    
    }
    else{
        next();
    }
}

// Bellow reqFilter method means that this APPLICATION-LEVEL middleware apply on bellow all files/routes, after that is shown in the browser
app.use(reqFilter)

// 1ST ROUTE HERE
app.get('', (request, response) => {
    response.sendFile(`${filePath}/table1.html`)
})

//2ND ROUTE HERE
app.get('/about', (request, response) => {
    response.sendFile(`${filePath}/about.html`)
})

//  3RD ROUTE HERE
app.get('/home', (request, response) => {
    response.sendFile(`${filePath}/home.html`)
})

app.listen(2323);