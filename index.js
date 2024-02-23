//part of node
const http = require("http");
const PORT = 3000;

const server = http.createServer();

const friends = [
  { id: 0, name: "Josue" },
  { id: 1, name: "Aguilor" },
  { id: 2, name: "Garcia" },
];

server.on("request", (req, res) => {
  //if parameter has an endpoint
  //example: localhost:3000/friends/2
  const items = req.url.split("/");

  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      //only accept string so need to convert it
      const friend = data.toString();

      console.log("Request:", friend);

      //convert the data gathered to json
      friends.push(JSON.parse(friend));
    });

    //after posting, this code will return what they post it back
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      //Number to convert string to number
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (req.method === "GET" && items[1] === "messages") {
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
