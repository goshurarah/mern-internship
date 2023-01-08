const express = require('express')
const router = new express.Router()


const stdRegisteration=require('./export_schema_validation_and_mongoose_connection')
//create
router.post('/registeration', async (req, resp)=>{
    let document1 = new stdRegisteration(req.body)
    document1=await document1.save()
    resp.send(document1);
})
 


//read
router.get('/registeration', async (req, resp)=>{
    let document1=await stdRegisteration.find()
    resp.send(document1);
})
router.get('/registeration/:student_name', async (req, resp)=>{
    let document1=await stdRegisteration.find(req.params)
    resp.send(document1);
})




//update
router.put('/registeration/:student_name', async (req, resp)=>{
    let document1 = await stdRegisteration.updateMany({student_name:req.params.student_name},{$set:req.body})
    resp.send(document1);
})





//delete
router.delete('/registeration/:student_name', async (req, resp) => {
    let document1 = await stdRegisteration.deleteOne(req.params)
    resp.send(document1)

})
// //2nd method from delete by ID
// router.delete('/registeration/:_id', async (req, resp) => {
//     let document1 = await stdRegisteration.deleteOne(req.params)
//     resp.send(document1)

// })

module.exports=router;