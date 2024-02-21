//part of node
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    //you can use content-type as "text/plain" if you only want to show message
    // "Content-Type": "application/json",
    "Content-Type": "text/plain",
  });
  res.end("Hello! Sir Josue");
  // res.end(JSON.stringify({ id: 1, name: "Josue Garcia" }));
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
