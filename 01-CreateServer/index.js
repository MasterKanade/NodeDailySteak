const http = require("http");

http
  .createServer((req, res) => {
    res.write("The Server has been created");
    res.end();
  })
  .listen(4500);
