/*
const http = require('http');

const server = http.createServer(function(req, res){
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify({
    platform: process.platform,
    nodeVersion: process.version,
    uptime: Math.round(process.uptime()),
  }));
});
//app.use(express.static(__dirname + '/htdocs'));

const port = 5000;
server.listen(port, function(){
  console.log('success http://localhost ${port}');
});
*/


 var express = require('express')
  , http = require('http')
  , app = express()
  ;

app.use(express.static(__dirname + '/htdocs'));

//app.listen(port);
var port = process.env.PORT || 5000;
var server = http.createServer(app).listen(port);
console.log("success load : http://localhost" + port);
