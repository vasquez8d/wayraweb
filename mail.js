let express = require('express');
let route = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wayracontrol.web@gmail.com',
    pass: 'm13rd4123'
  }
});

route.get("/", function(request, response){
  console.log('enviando_mail');
  var pName = request.param('nombre');
  var pMail = request.param('correo');
  var pMensaje = request.param('mensaje');
  var fecha = new Date();
  console.log(fecha);
  var mailOptions = {
    from: 'wayracontrol.web@gmail.com',
    to: 'jposadas@wayracontrol.com',
    subject: 'Nuevo mensaje ingresado a la página web ' + fecha.getDate() +
             '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear(),
    html: 'Mail enviado por : ' + pName + '<br/>' +
          'Correo electrónico : '+ pMail + '<br/>' +
          'Mensaje : ' + pMensaje
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      response.send('{"RESPUESTA":"OK"}')
    }
  });

});

module.exports = route;
