var express = require('express');
var app = express();

app.get("/", function(request,response){
   response.writeHead(200, {"Content-Type": "text/plain"});
   response.render("index")
});

app.listen(8080);