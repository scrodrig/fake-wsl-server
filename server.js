const soap = require('soap');
const express = require('express');
const bodyParser = require('body-parser');
const { myService } = require('./services/definition/myService');
const { greeterService } = require('./services/definition/greetUser');

var xml_myService = require('fs').readFileSync('wsdl/myservice.wsdl', 'utf8');
var xml_greeterService = require('fs').readFileSync('wsdl/greetUser.wsdl', 'utf8');
var xml_weather = require('fs').readFileSync('wsdl/weatherService.wsdl', 'utf8');

var app = express();
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
    console.log('server myservice initialized');
  });

  soap.listen(app, '/greeter', greeterService, xml_greeterService, function () {
    console.log('server greeter initialized');
  });

  soap.listen(app, '/weather', greeterService, xml_weather, function () {
    console.log('server weather initialized');
  });
});
