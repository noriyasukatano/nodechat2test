 var express = require('express')
  , http = require('http')
  , app = express()
  ;


// CORSを許可する
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'authorization, X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.static(__dirname + '/htdocs'));

//app.listen(port);
var port = process.env.PORT || 5000;
var server = http.createServer(app).listen(port);
console.log("success load : http://localhost" + port);
