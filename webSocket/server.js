const express = require('express');
const cors = require('cors');
const wsServer = require('./ws-server');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));

const server = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

wsServer(server);
