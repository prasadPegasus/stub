const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");    
    if (req.url == "/categories") {
      fs.readFile("./categories.json", (err, data) => {
        res.end(data.toString());
      });
    }
    if (req.url == "/vod") {
        fs.readFile("./vod.json", (err, data) => {
          res.end(data.toString());
        });
      }
  })
  .listen(8088);
