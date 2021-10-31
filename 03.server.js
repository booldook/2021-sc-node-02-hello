const http = require("http");
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Hello World");
  } else if (req.url === "/hello") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Hello Hello");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-type", "text/plain; charset=utf-8");
    res.end("파일을 찾을 수 없습니다.");
  }
});

server.listen(port, host, () => console.log("Server Running!"));
