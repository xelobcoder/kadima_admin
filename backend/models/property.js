const router = require("express").Router();
const res = require("express/lib/response");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const building = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  gps: { type: String, required: true },
  marketStatus: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  toilet: { type: String, required: true },
  phone: { type: Array, required: true },
  parking: { type: String, required: true },
  region: { type: String, required: true },
  district: { type: String, required: true },
 area: { type: String, required: true },
 isComplete: {
  type: Boolean,
  default: false,
 },
 images: {
  type: Array,
  default: [],
 },
 imageuploadTime: {type: Date, default: Date.now}
}, { timestamps: true });


const buildingModel = mongoose.model("building", building);




router.route("/api/v1/property")
 .all(function (request, response, next) {
  res.statusCode = 200;
  console.log(request.headers.authorization)
  next();
 })
 .get(function (request, response) {
  buildingModel.find({}, function (err, data) {
   if (err) throw err;
   response.send(data);
  })
 })
 .post(function (request, response) {
  const buildinguploadModel = new buildingModel(request.body); 
  buildinguploadModel.save((err, data) => {
   if (err) throw err;
   response.send("success");
  });
  
 })



module.exports = {router, buildingModel};