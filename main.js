var urlLocalhost = getIPAdress();

var port = 3000;
var Msocket = null;
console.log('http://'+urlLocalhost+':'+port);
// console.log('https://abc.iwinad.com');


var net = require('net');




(function () {
var express = require('express');
var app = require('express')();
// var fs = require('fs');
// var privateKey  = fs.readFileSync('./keys/214415798030342.key', 'utf8');  
// var certificate = fs.readFileSync('./keys/214415798030342.pem', 'utf8');  
// var credentials = {key: privateKey, cert: certificate};
// var https = require('https').Server(credentials, app);
var http = require('http').Server(app);
// var io = require('socket.io')(https, {
// // var io = require('socket.io')(http, {
//   pingInterval: 3000,
//   pingTimeout: 1000,
// });
var io = require('socket.io')(http);
// var io = require('socket.io')(https);
const { spawn } = require('child_process');

app.use(express.static(__dirname + '/src'));



io.on('connection', function(socket){


  // onlyVideo
  socket.on('openApp', function(msg){
    console.log(msg);
    const bat = spawn('cmd.exe', ['/c', 'my.bat']);
  });
  
});


http.listen(port, urlLocalhost);
})();
  
function getIPAdress(){  
    var interfaces = require('os').networkInterfaces();  
    for(var devName in interfaces){  
          var iface = interfaces[devName];  
          for(var i=0;i<iface.length;i++){  
               var alias = iface[i];
               if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                  return alias.address;  
               }  
          }  
    }  
}