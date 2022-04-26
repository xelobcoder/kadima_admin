const multer = require("multer");
const {v4: uuidv4}  = require ("uuid");
const router = require("express").Router();



const diskStorage = multer.diskStorage({
 destination: function (req, file, cb) {
  cb(null, "./public/images/building");
 },
 filename: function (req, file, cb) {
  let extension = file.mimetype.split("/")[1];
  console.log(extension)
  cb(null,uuidv4() +  "." + extension);
 }
});


const upload = multer({ storage: diskStorage, limits: 1024 * 1024 * 5 });

router.route("/v1/api/uploadbuildingimages")
.post(upload.array("files", 50), (req, res, next) => {
  const filearray = [];
  for (var i = 0; i < req.files.length; i++) {
   filearray.push(req.files[i].filename);
 }
 console.log(req.headers);
 });


module.exports = router;