'use strict';

var PORT = 3000;

var http = require('http');
var soap = require('soap');

var welcome = 'Web Service Server Proxy is running on port ' + PORT;
console.log('');
console.log(welcome);
console.log('');

var server = http.createServer(function(req, res) {
  console.log('url: %s', req.url);
  res.end(welcome);
}).listen(PORT);

var serverLog = function(type, data) {
  console.log('type: ' + type);
  console.log('data: ' + data);
};

var register = function(path) {
  var handler = require('.' + path + '/handler.js');
  var xml = require('fs').readFileSync('.' + path + '/wsdl.wsdl', 'utf8');
  xml = xml.replace(/:address location=".*" \/>/g, ':address location="http://localhost:' + PORT + path + '" />');
  soap.listen(server, path, handler.service, xml).log = serverLog;
};

register('/demo');
