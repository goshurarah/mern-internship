const multer = require('multer')
const express = require('express');
const app = express();

const port = process.env.PORT || 1000

//bellow is middleware/multer process
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploaded files'),
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + '.jpg')
})
const upload = multer({ storage: fileStorage }).single('user_file')// file name here that is written in postman API

app.post('/upload', upload, (req, resp, next) => {
    resp.send("file_uploaded succesfully")
})
app.listen(port, () => {
    console.log(`server is listening to the port ${port}`);
})