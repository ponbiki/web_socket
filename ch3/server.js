var WebSocketServer = require('ws').Server,
    wss =new WebSocketServer({port:8181});

wss.on('connection', function(socket) {
    console.log('client connected');
    socket.on('message', function(message) {
        console.log(message);
    });
});