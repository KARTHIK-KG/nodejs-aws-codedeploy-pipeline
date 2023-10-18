// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello from the back-end!\n');
// });

// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the back-end!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
