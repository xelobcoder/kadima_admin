const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer);
const express = require("express");
const app = express(io);


io.on("connection", (socket) => {
  console.log(socket);
});


app.listen("8000", () => {
    console.log("Server is running on port 8000");
});


app.get("/", function(request,response){
    response.send("<h1>Hello World</h1>");
})



