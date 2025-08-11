const express = require('express');
const WebSocket = require('ws');
const app = express();

// Express server setup
app.use(express.json());  // Middleware to parse JSON bodies

// Route to handle GET requests to /api/data
app.get('/api/data', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

// Route to handle POST requests to /api/data
app.post('/api/data', (req, res) => {
    const { name } = req.body;  // Extract the 'name' field from the request body
    if (name) {
        res.status(200).json({ message: 'Data received' });
    } else {
        res.status(400).json({ message: 'Bad Request' });
    }
});

// WebSocket server setup
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', ws => {
    console.log('Client connected');

    // Handle incoming messages from the WebSocket client
    ws.on('message', message => {
        const data = JSON.parse(message);
        console.log(`Received: ${data.payload} from client ${data.clientId}`);

        // Broadcast the message to all connected clients
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Client ${data.clientId} sent -> ${data.payload}`);
            }
        });
    });

    // Handle client disconnect
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Handling WebSocket upgrades for Express
app.server = app.listen(8080, () => {
    console.log('Server running on port 8080');
});

// Handle WebSocket upgrade requests
app.server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, ws => {
        wss.emit('connection', ws, request);
    });
});

module.exports = app;

