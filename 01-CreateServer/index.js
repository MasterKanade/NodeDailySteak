const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1> The Server has been created </h1>");
    res.end();
  })
  .listen(4500);
