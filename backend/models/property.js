const router = require("express").Router();
const res = require("express/lib/response");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// title,
// description,
// price,
// status,
// address,
// region,
// district,
// area,
// categories,
// gps,
// latitude,
// longitude,
// bedrooms,
// bathrooms,
// garages,
// toilets,
// agentNotes,
// type,
// basements,
// parking,
// rooms,
// kitchen,
// gym,
// mediaStudio,
// swimmingPool,
// terrace,
// garden,
// courtyard,
// balcony,
// pation,
// gas,
// water,
// electricity,
// sewage,
// phone,
// trash,
// fire,
// cable,
// ventilation,

const building = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, required: true },
  address: { type: String, required: true },
  region: { type: String, required: true },
  district: { type: String, required: true },
  area: { type: String, required: true },
  categories: { type: String, required: true },
  gps: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  garages: { type: Number, required: true },
  toilets: { type: Number, required: true },
  agentNotes: { type: String, required: true },
  type: { type: String, required: true },
  basements: { type: String, required: true },
  parking: { type: String, required: true },
  rooms: { type: String, required: true },
  kitchen: { type: String, required: true },
  gym: { type: String, required: true },
  mediaStudio: { type: String, required: true },
  swimmingPool: { type: String, required: true },
  terrace: { type: String, required: true },
  garden: { type: String, required: true },
  courtyard: { type: String, required: true },
  balcony: { type: String, required: true },
  pation: { type: String, required: true },
  gas: { type: String, required: true },
  water: { type: String, required: true },
  electricity: { type: String, required: true },
  sewage: { type: String, required: true },
  phone: { type: String, required: true },
  trash: { type: String, required: true },
  fire: { type: String, required: true },
  cable: { type: String, required: true },
  ventilation: { type: String, required: true },
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