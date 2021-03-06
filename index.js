var express = require('express');
var app = express();

app.set("view engine","jade");
app.use(express.static("public"));

app.get("/", function(request,response){
   response.render("index")
});

app.get("/contacto", function(request,response){
   response.render("contact")
});

app.get("/productos", function(request,response){
   response.render("productos")
});

app.get("/galeria", function(request,response){
   response.render("galeria")
});

app.get("/control-aviar", function(request,response){
   response.render("service1")
});

app.get("/exhibiciones", function(request,response){
   response.render("service2")
});

app.get("/publicidad", function(request,response){
   response.render("service3")
});

app.get("/rptamail", function(request,response){
   response.render("mail")
});

var mail = require('./mail.js');

app.use("/sendmail", mail);

var port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;

console.log("Server running at http://localhost:%d", port);
