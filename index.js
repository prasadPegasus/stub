const http = require("http");
const fs = require("fs");
const path=require('path');
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");    
    if (req.url == "/categories") {
      fs.readFile(path.join(__dirname,"./categories.json"), (err, data) => {
          if(data)
            res.end(data.toString());
      });
    }
    if (req.url == "/vod") {
        fs.readFile(path.join(__dirname,"./vod.json"), (err, data) => {
            if(data)
                res.end(data.toString());
        });
      }
  })
  .listen(8088);
