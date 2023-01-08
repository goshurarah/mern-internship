const colors=require('colors')
console.log(`ROUTE-LEVEL MIDDLEWARE NODE`.bgYellow);

const path=require('path')
const express=require('express');

const filePath=path.join(__dirname, 'html_pages')
const app=express();

/*
                                IMPORTANT NOTE

HERE, ROUTE-LEVEL MIDDLEWARE TELLS THAT IT ACTS IN THIS WAYS THAT IS SHOWN BELLOW;
1. APPLY MIDLLEWARE ON A SINGLE ROUTE: apply on one route
2. MAKE MIDLLEWARE IN DIFFERENT FILES: it means to create separate file and insert route-level middleware data in that file that is created separately and import that data in this file
3. APPLY MIDDLEWARE IN THE GROUP OF ROUTE: apply on more than one/two to onward routes or if developer want to run middleware automatically on group of routes, this 2nd method will be continuous

*/

 


// ROUTE-LEVEL middleware work here!

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

// 1. APLLY MIDLLEWARE ON A SINGLE ROUTE: apply on one route
// 1ST ROUTE HERE
app.get('', reqFilter, (request, response) => {
    response.sendFile(`${filePath}/table1.html`)
})

// 2ND ROUTE HERE
app.get('/about', (request, response) => {
    response.sendFile(`${filePath}/about.html`)
})

//  3RD ROUTE HERE
app.get('/home', (request, response) => {
    response.sendFile(`${filePath}/home.html`)
})
app.listen(5452);





// // 2. MAKE MIDLLEWARE IN DIFFERENT FILES: it means to create separate file and insert ROUTE-LEVEL middleware data in that file that is created separately and import that data in this file

// // here import ROUTE_LEVEL middleware file
// const importRouteLevelMiddlewareFile=require('./export_route_level_middleware_node_using_express')
// // 1ST ROUTE HERE
// app.get('', reqFilter, (request, response) => {
//     response.sendFile(`${filePath}/table1.html`)
// })

// // 2nd ROUTE HERE
// app.get('/about', (request, response) => {
//     response.sendFile(`${filePath}/about.html`)
// })

// //  3RD ROUTE HERE
// app.get('/home', (request, response) => {
//     response.sendFile(`${filePath}/home.html`)
// })
// app.listen(5452);





// // 3. APPLY MIDDLEWARE IN THE GROUP OF ROUTE: apply on more than one/two to onward routes or if developer want to run middleware automatically on group of routes, this 2nd method will be continuous
//                                  // 1st method
// // 1ST ROUTE HERE
// app.get('', (request, response) => {
//     response.sendFile(`${filePath}/home.html`)
// })

// // 2ND ROUTE HERE
// app.get('/about',reqFilter, (request, response) => {
//     response.sendFile(`${filePath}/about.html`)
// })

// // 3RD ROUTE HERE
// app.get('/table', reqFilter, (request, response) => {
//     response.sendFile(`${filePath}/table1.html`)
// })
// app.listen(5452);

//                             // 2nd method

// const router=express.Router();
// router.use(reqFilter)

// // 1ST ROUTE HERE
// app.get('', (request, response) => {
//     response.sendFile(`${filePath}/home.html`)
// })

// // 2ND ROUTE HERE
// app.get('/about', (request, response) => {
//     response.sendFile(`${filePath}/about.html`)
// })

// //if developer want to run middleware automatically on group of routes, this method will be continuous
// // 3RD ROUTE HERE
// router.get('/table', (request, response) => {
//     response.sendFile(`${filePath}/table1.html`)
// })

// // 4TH ROUTE HERE
// router.get('/*', (request, response) => {
//     response.sendFile(`${filePath}/404file.html`)
// })
// app.use('/', router)
// app.listen(5452);