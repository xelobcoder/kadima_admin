const httpServer = require("http").createServer();
const data  = require("./data.js");
const io = require("socket.io")(httpServer);
const express = require("express");
const app = express(io);
const cors = require("cors");

app.use(cors());


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



