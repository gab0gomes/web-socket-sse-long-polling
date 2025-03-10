const ws = new WebSocket('ws://localhost:3000');

ws.onopen = function() {
    document.querySelector('#send').disabled = false;
    document.querySelector('#send').addEventListener('click', function() {
        ws.send(document.querySelector('#message').value);
    });
};

ws.onmessage = function(msg) {
    document.querySelector('#messages').innerHTML += `<div>${msg.data}</div>`;
};