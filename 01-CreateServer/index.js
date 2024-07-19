const http = require("http");

function dataControl(req, res) {
  res.write("<h1>The Server has been created. using Normal Function.</h1>");
  res.end();
}

http.createServer(dataControl).listen(4500);
