//part of node
const http = require("http");
const PORT = 3000;

const server = http.createServer();

const friends = [
  { id: 1, name: "Josue" },
  { id: 2, name: "Aguilor" },
  { id: 3, name: "Garcia" },
];

server.on("request", (req, res) => {
  //if parameter has an endpoint
  //example: localhost:3000/friends/2
  const items = req.url.split("/");

  if (items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      //Number to convert string to number
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello Josue!</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
