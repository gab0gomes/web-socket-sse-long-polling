const eventSource = new EventSource("http://localhost:3000/events");

eventSource.onopen = (event) => {
    console.log('opening connection: ' + JSON.stringify(event));
}

eventSource.onmessage = event => {
    console.log('got message: ' + event.data);
}   