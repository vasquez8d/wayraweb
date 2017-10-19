<<<<<<< HEAD
var express = require('express');
var app = express();
=======
var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World Alex!");
>>>>>>> d24061dcb819462227d55215b64edc6c5d08c050

app.get("/", function(request,response){
   response.writeHead(200, {"Content-Type": "text/plain"});
   response.render("index")
});

<<<<<<< HEAD
app.listen(8080);
=======
var port = process.env.PORT || 8080;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
>>>>>>> d24061dcb819462227d55215b64edc6c5d08c050
