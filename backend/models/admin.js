const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminlogins = new Schema({
    dbusername: {
        type: String,
        required: true
    },
    dbpassword: {
        type: String,
        required: true
    },
    accessToken: {
        type: String,
        required: false
    },
    refreshToken: {
        type: String,
        required: false
    },
    secretQuestion: {
      type: String,
      required: true,
    },
    answerQuestion:{
     type:String,
     required:true
    }

},{timestamps: true});


const adminloginModel = mongoose.model("adminlogin", adminlogins);


// const payload = {
//  username: "tiifu hamza",
//  password: "tiifu hamza",
//  accessToken: "tiifu hamza",
//  refreshToken: "tiifu hamza",
//  secretQuestion: "What favorite pest lost animal?",
//  answerQuestion: "Kadima", 
// }; 

// const saver = new adminloginModel(payload);

// saver.save((err,data) => {
//    if(err) throw err;
//    console.log(data);
// })

module.exports = adminloginModel;