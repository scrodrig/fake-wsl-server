const soap = require('soap');
const express = require('express');
const bodyParser = require('body-parser');
const { myService } = require('./services/definition/myService');
const { greeterService } = require('./services/definition/greetUser');

var xml_myService = require('fs').readFileSync('wsdl/myservice.wsdl', 'utf8');
var xml_greeterService = require('fs').readFileSync('wsdl/greetUser.wsdl', 'utf8');

//express server example
var app = express();
//body parser middleware are supported (optional)
app.use(
  bodyParser.raw({
    type: function () {
      return true;
    },
    limit: '25mb',
  }),
);
app.listen(8000, function () {

  soap.listen(app, '/myservice', myService, xml_myService, function () {
    console.log('server initialized');
  });

  soap.listen(app, '/greeter', greeterService, xml_greeterService, function () {
    console.log('server initialized');
  });
});
