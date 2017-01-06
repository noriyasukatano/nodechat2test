var path = require('path');
var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(path.join(__dirname, 'htdocs')));
//app.use(express.static('htdocs'));

io.on('connection', function(socket){
  socket.on('send_message', function(text){
	io.sockets.emit('receive_message',text);
  });
});

http.listen(3000);
console.log('Server started: http://localhost:3000/');
/* var port = 3000;
http.listen(port,function(){
	console.log("Expressサーバーがポート%dで起動しました。モード:%s",port,app.settings.env)
}); */

/*
// サーバーをソケットに紐付ける
var io = socketio.listen( app );

// 接続確立後の通信処理部分を定義
io.sockets.on( 'connection', function( socket ) {

    // クライアントからサーバーへ メッセージ送信ハンドラ（自分を含む全員宛に送る）
    socket.on( 'c2s_message', function( data ) {
        // サーバーからクライアントへ メッセージを送り返し
        io.sockets.emit( 's2c_message', { value : data.value } );
    });

    // クライアントからサーバーへ メッセージ送信ハンドラ（自分以外の全員宛に送る）
    socket.on( 'c2s_broadcast', function( data ) {
        // サーバーからクライアントへ メッセージを送り返し
        socket.broadcast.emit( 's2c_message', { value : data.value } );
    });
});
*/
