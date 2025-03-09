const socket = new WebSocket('ws://example.com');

socket.onopen = function(event) {
    console.log('Connection established');
    socket.send('Hello server!');
}

socket.onmessage = function(event) {
    console.log('Message from server:', event.data);
}
