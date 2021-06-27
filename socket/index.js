const path = require('path');
const express = require('express');
const app = express();

// Toma un puerto del computador o crea uno
app.set('port',process.env.PORT || 3000);

// conecta con un archivo estático (en este caso el HTML)
app.use(express.static(path.join(__dirname, 'public')));


// Inicia el servidor
const server = app.listen(app.get('port'), () => {
      console.log('Server on port', app.get('port'));
});

// Conectar Socket
const SocketIO = require('socket.io');
const io = SocketIO(server);

//Escuchar los datos
io.on('connection', (socket) => {

      socket.on('chat:message',(data) => {
            io.sockets.emit('chat:message', data);
      });


      socket.on('chat:typing', (data) => {
            socket.broadcast.emit('chat:typing',data);
      })
});





