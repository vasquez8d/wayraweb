var express = require('express');
var app = express();

app.set("view engine","jade");
app.use(express.static("public"));

app.get("/", function(request,response){
   response.render("index")
});

app.get("/contact", function(request,response){
   response.render("contact")
});

app.get("/servicios", function(request,response){
   response.render("servicios")
});

app.get("/galeria", function(request,response){
   response.render("galeria")
});

var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);