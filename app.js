const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const userController = require('./controller/user');
const aut = require('./middleware/auth');
const musikController = require('./controller/musik')
const multer = require('multer');


const app = express();
const port = 3000;




//multer album
const penyimpananfile = multer.diskStorage({
  destination: function (req, file, cb) {
    if(file.fieldname === "image") {
      cb(null, "uploads/", uploadfile.single("album"));

    } else {
      cb(null, "uploads/", uploadfile.single("musik"));

    }
  },
  filename: function (req, file, cb) {
    if(file.fieldname === "album") {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");

    } else {
      cb(null, file.fieldname + "-" + Date.now() + ".mp3");

    }
  },
});
const uploadfile = multer({ storage: penyimpananfile});

//Pemutar musik


// buat excute statik file di web full (muncul diweb localhost:3000/filename)
app.use(express.static(__dirname + '/uploads'));


app.use(bodyParser.urlencoded({ extended: false,}))

//CRUD
app.get('/get-album',musikController.getMusik)
app.post('/created-signup',userController.signup)
app.post('/signin',userController.signin)
app.post('/created-album',uploadfile.any(),musikController.postMusik)
app.delete('/delete-album/:id',musikController.deleteMusik)
app.listen(port);