const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const router = require("express").Router();
const multer = require ("multer");
const  { v4: uuidv4 } = require('uuid');
const landupload = require("./landModel");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/images/landImages");
    },
    filename: function(req, file, cb) {
     const extention = file.mimetype.split("/")[1];
     cb(null, uuidv4() + "." + extention);
   },
});


const limit = {
 fileSize: 1024 * 1024 * 5,
}

const uploads = multer({storage: storage,limits: limit});
// router.use()







router.route("/api/uploadsimages")
.post(uploads.array("files",50),(request,response,next) => {  
  const  filearray = [];

  for(var i = 0; i < request.files.length; i++){
    filearray.push(request.files[i].filename);
  }

  setTimeout(() => {
    const id = request.body._id;

    landupload.findByIdAndUpdate(id,{isComplete: true, images: {
      imagesCollection: filearray,
      imageupdateTime: Date.now(),
      imageLocation: "/public/images/landImages/"
  
    }},(err,data) => {
        if(err) throw err;
        response.send(data);
    })
  }, 500);

})
.get(function(request,response){
  landupload.find({isComplete: true}, (function(err,data){
    if(err) throw err;
    if(data) {
       response.send(data)
    }
  }))
})
.patch()
.put()






module.exports = router;