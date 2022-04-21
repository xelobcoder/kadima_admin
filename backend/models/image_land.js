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

const imageDetails = new Schema({
   imageRef: {
    type: String,
    required: true
   },
   imageLocation: {
    type: String,
    required: true,
    default: "/public/images/landImages/",
   },
   imageUploadDate: {
    type: Date,
    require: true,
    default: Date.now
   },
   image:{
    type: [String],
    required: false,
   },
},{timestamps:true});

const landimages =  mongoose.model("landimages", imageDetails);



router.route("/api/uploadsimages")
.post(uploads.array("files",50),(request,response,next) => {  
  const  filearray = [];

  for(var i = 0; i < request.files.length; i++){
    filearray.push(request.files[i].filename);
  }

   const payload = {
    imageRef: request.body._id,
    image: filearray,
  };
  const model = new landimages(payload);
  model.save((err,data) => {
    if(err){
        response.send(err);
        console.log(err)
    }
    else{
        // response.redirect("http://localhost:3000/request/Translands");
        next();
    }
 });
})
.post(function(request,response){
  const id = request.body._id;
  landupload.findByIdAndUpdate(id,{isComplete: true},(err,data) => {
    if(err){
        response.send(err);
        console.log(err)
    }
    else{
        response.send("Success");
    }
 });
})
.get(function(request,response){
  landimages.find( (function(err,data){
    if(err) throw err;
    response.send(data)
  }))
})
.patch()
.put()






module.exports = router;