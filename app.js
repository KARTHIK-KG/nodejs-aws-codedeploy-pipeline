const express = require('express');
const app = express();
const hostname = '3.111.41.89';
const port = 3000;
const version = '3,000,000';

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Simple Node.js Web Page</title>
        </head>
        <body>
            <button id="clickButton">Click Here</button>
            <p id="message"></p>

            <script>
                document.getElementById("clickButton").addEventListener("click", function() {
                    document.getElementById("message").textContent = "Welcome to Code-D Test Portal :)";
                });
            </script>
        </body>
        </html>
    `);

    console.log(`[Version ${version}]: New request => http://${hostname}:${port}` + req.url);
});

app.listen(port, () => {
    console.log(`[Version ${version}]: Server running at http://${hostname}:${port}/`);
});
