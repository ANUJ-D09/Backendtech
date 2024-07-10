const http = require('http');
const hostname = '127.0.0.1'; // Corrected hostname
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("hello anuj");
    } else if (req.url === '/anuj') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Thanks for calling anuj he says hello to you");
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("404 not found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
});