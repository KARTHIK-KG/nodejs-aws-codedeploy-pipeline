const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Serve the HTML content as a string
        const htmlContent = `
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
                        document.getElementById("message").textContent = "Welcome! to Code-D Backend Test";
                    });
                </script>
            </body>
            </html>
        `;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
