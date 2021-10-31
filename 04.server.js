const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log("http://127.0.0.1:" + port));

app.get("/", (req, res) => {
  res.status(200).send("Server Root");
});

app.get("/hello", (req, res) => {
  res.status(200).send("Hello World");
});

app.use((req, res) => {
  res.status(404).send("File Not Found");
});
