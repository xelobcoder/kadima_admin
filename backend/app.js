const httpServer = require("http").createServer();
const data  = require("./data.js");
const io = require("socket.io")(httpServer);
const express = require("express");
const app = express(io);
const cors = require("cors");
const mongoose = require("mongoose");
const landmodel = require("./models/landModel.js");
const queries = require("./models/queries");
const adminlogin = require("./models/admin");
const middlwares = require("./models/controllers/middlewares");
const getSource = require("./models/originlog");
const postBuildingImages = require("./models/propImage");
const {router,buildingModel} = require ("./models/property");
const path = require("path");


mongoose.connect("mongodb://localhost:27017/kadima",(err)=>{
    if(err) throw err;
    console.log("Connected to MongoDB");
});

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(router)
app.use(postBuildingImages);

io.on("connection", (socket) => {
  console.log(socket);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.get("/api/properties", function(request,response){
    response.send(data.properties);
})

// api for posting land properties;

app.post("/api/v1/properties/land", (request,response) => {
    const data  = {
        gps_location: request.body.gps_location,
        isComplete: request.body.isComplete,
        land_width: request.body.land_width,
        land_length: request.body.land_length,
        location: request.body.location,
        district: request.body.district,
        region: request.body.region,
        price: request.body.price,
        marketStatus: request.body.marketStatus,
        topography: request.body.topography
    };

    const landuploadModel = new landmodel(data);
    landuploadModel.save((err,data) => {
      if(err){
          response.send(err);
          console.log(err)
      }
      else{
          response.send("success");
      }
    }
    )

})







app.get("/api/v1/properties/incomplete",getSource, (request,response) => {
    queries.getIncomplete(response,landmodel);
});

app.post("", (request,response) => {

   
})

const landimages = require("./models/image_land.js");
const getsource = require("./models/originlog.js");

app.use(landimages);


// login for administrator

app.post("/api/adminlogin",(request,response) => {
    const { username, question, password, answer } = request.body;
})


app.get('/api/v1/landview/single/', (request,response) => {
    let idQuery =request.query;

    let id = Object.values(idQuery)[0].trim();

    response.sendFile(path.resolve(__dirname + "/public/images/landImages/" , id));
})


app.get('/api/v1/landview/all/', (request,response) => {
    let idQuery = request.query;

    let id = Object.values(idQuery)[0].trim();

    landmodel.findById({_id:id}, function(err,data) {
        if(err) throw err;
        response.send(data);
    })
})


app.post("/api/land/query", (request,response) => {
    const {minprice,maxprice,location,region} = request.body;
     landmodel.find( {
        location:{ $regex:/^[a-zA-Z]/i},
        price:{$gte:minprice,$lte:maxprice},
        region:{$regex:/^[a-zA-Z]/i}
     },(err,data) => { if(err) response.send("error"); response.send(data)})
})

