const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 3000;

const httpServer = http.createServer(httpHandler);

httpServer.listen(port, host, () => {
    console.log(`HTTP server running at http://${host}:${port}/`);
});

function httpHandler(req, res) {

    // Normalize the URL to serve the index.html file for root requests
    if (req.url === '/') { 
        req.url = './index.html';
    }
    
    fs.readFile(req.url, function (err, data) {

        console.log(`Request for ${req.url} received.`);
        if (err == null ) {

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    }); 
}