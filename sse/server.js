const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/events', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/event-stream',
        'cache-control': 'no-cache',
        'connection': 'keep-alive',
    });

    const sendEvent = (data) => {
        const formattedData = `data: ${JSON.stringify(data)}\n\n`;
        res.write(formattedData);
    }

    const intervalId = setInterval(() => {
        const message = {
            time: new Date().toTimeString(),
            message: 'Hello from the server!',
        };
        sendEvent(message);
    }, 2000);

    req.on('close', () => {
        clearInterval(intervalId);
        res.end();
        console.log(`Connection ${intervalId} closed`);
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

