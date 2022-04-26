const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logs = new Schema({
 isCookie: {
   type: Boolean,
  default: false,
   required: true
 },
 hostname: { type: String, required: true },
 ip: { type: String, required: true },
 ips: { type: Array, required: true },
 date: { type: Date, required: true },
 origin: { type: String, required: false ,default: null},
 referer: { type: String, required: false,default:null },
 host: { type: String, required: true },
 useragent: { type: String, required: true }
},{timestamps:true});


const logModel = mongoose.model("logs", logs);

const getsource = function (request, response, next) {
 
 let source = {
  cookie: request.headers.cookie === "undefined" ? request.headers.cookie: false ,
  hostname: request.hostname,
  ip: request.ip,
  ips: request.ips,
  date: new Date(),
  origin: request.headers.origin,
  referer: request.headers.referer || "",
  host: request.headers.host,
  useragent: request.headers["user-agent"]
 };
  console.log(source)
 const pushdata = new logModel(source);

 pushdata.save((err, data) => {
  if (err) response.send(err);
  else {
    next();
  };
 });
}


module.exports = getsource;