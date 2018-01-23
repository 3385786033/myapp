var websocketServer = require('ws').Server,
  ws = new websocketServer({ port:8181 });
var jsn = {a:1,b:2};
var x = jsn.toString()
ws.on('connection',function (ws) {
  console.log('client connection');
  ws.on('message',function (message) {
   ws.send(message);
  });

});