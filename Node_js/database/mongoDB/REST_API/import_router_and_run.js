const exportRouter=require('./export_router_crud_rest_api_postmanApi_with_mongoose')

const express=require('express')
const app=express()
app.use(express.json())
app.use(exportRouter)



const port = process.env.PORT || 6060; 
app.listen(port, () => {
    console.log(`server is listening to the port ${port}`)
}) 