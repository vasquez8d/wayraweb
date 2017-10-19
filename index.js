var express = require('express');
var app = express();

app.get("/", function(request,response){
   response.send("Hola_Alex")
});

var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);