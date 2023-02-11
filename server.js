const express = require("express");
const https_ = require("https");
const fs = require("fs");

const http = express();
const https = express();

const httpPort = 3000;
const httpsPort = 3001;

[http, https].forEach((app) => {
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello world");
  });

  app.post("/", (req, res) => {
    console.log(req.body);
    res.status(200);
  });
});

http.listen(httpPort, () => {
  console.log(`Example app listening on port ${httpPort}`);
});

var key = fs.readFileSync(__dirname + "/selfsigned.key");
var cert = fs.readFileSync(__dirname + "/selfsigned.crt");
var options = {
  key: key,
  cert: cert,
};

httpsServer = https_.createServer(options, https);

httpsServer.listen(httpsPort, () => {
  console.log(`Example app listening on port ${httpsPort}`);
});
