const router = require("express").Router();
const mongoose = require("mongoose");

const saveData = function (request, response) {
 const { name, price, property, gpsAddress, marketstatus, bedroom, bathrooms, toilet, phonenumber,
  parking, region, district, area } = request.body;
}

router.route("/v1/api/building")
 .all((req, res, next) => { 
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
 })
 .get(function (request, response) {
  response.status(200).json({
    message: "GET request successfulll!!!!",
     })
 })
 .post((request, response) => {
   
 })