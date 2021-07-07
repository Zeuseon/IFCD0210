const http = require ("http");

const server = http.createServer((req, res) => {
 console.log("server response...");
 res.end("I'm sending this from my node.js server");
});

const port = 3000;

server.listen(port, () => {
    console.log("listening...")
});