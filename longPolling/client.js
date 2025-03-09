function longPolling() {
    fetch('http://example.com/poll')
        .then(response => response.json())
        .then(data => {
            console.log('received data:', data);
            longPolling();
        })
        .catch(error => {
            setTimeout(longPolling, 1000);
        })
}

longPolling();
