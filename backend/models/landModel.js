const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Land = new Schema({
    gps_location: {
        type:String,
        required:true
    },
    isComplete:{type: Boolean,default: false},
    land_width: {
        type:Number,
        required:true
    },
    land_length: {
        type:Number,
        required: true
    },
    location: {
        type:String,
        required:true
    },
    district: {
        type:String,
        required:true
    },
    region: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required:true
    },
    marketStatus:{
        type:String,
        required:true,default: "Available"
    },
    topography: {
        type: String,
        required: true
    },
    images:  {
         imagesCollection: {
             type: Array,
             required: false,
             default: []
         },
         imageupdateTime: {
            type: Date,
            required: false,
            default: Date.now
         },
         imageLocation: {
            type: String,
            required: false,
            default: "/public/images/landImages/"
         },
    }

},{timestamps:true});


const landmodel = mongoose.model("landCollections",Land);

module.exports = landmodel;

