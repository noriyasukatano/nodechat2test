var express = require('express')
  , http = require('http')
  , app = express()
  ;
app.use(express.static(__dirname + '/htdocs'));
var port = process.env.PORT || 5000;
var server = http.createServer(app).listen(port);


//var path = require('path');
//var express = require("express");
//var app = express();
//var http = require('http').Server(app);
//var io = require('socket.io')(http);

//app.use(express.logger());
//app.use(express.static(path.join(__dirname, 'htdocs')));
/*
app.get('/', function(request, response) {
  response.send('Hello World webJS!');
});
*/

/* io.on('connection', function(socket){
  socket.on('send_message', function(text){
	io.sockets.emit('receive_message',text);
  });
}); */
/*
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/
