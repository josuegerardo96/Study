const socket = io()

let message = document.getElementById('message');
let username = document.getElementById('username');
let output = document.getElementById('output');
let actions = document.getElementById('actions');
let btn = document.getElementById('send');

btn.addEventListener('click', function () {

      // Enviar datos
      socket.emit('chat:message', {
            message:message.value,
            username:username.value
      });
});


message.addEventListener('keypress', function(){
      socket.emit('chat:typing', username.value)
});


socket.on('chat:message', function (data) {
      actions.innerHTML = '';
      output.innerHTML += `<p> 
                              <strong> ${data.username} </strong>: ${data.message} 
                           </p>` 
});



socket.on('chat:typing', function(data){
      actions.innerHTML = `<p> <em> ${data} is typing a message </em></p>`
})

