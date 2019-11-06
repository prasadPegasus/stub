const http = require("http");
const fs = require("fs");
const path = require("path");
// var CryptoJS = require("crypto-js");

// Encrypt
// var ciphertext = CryptoJS.AES.encrypt("my message", "secret key 123");

// // Decrypt
// console.log(ciphertext.toString());

// var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), "secret key 123");
// var plaintext = bytes.toString(CryptoJS.enc.Utf8);

// console.log(plaintext);

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    let filename = "";

    switch (req.url) {
      case "/menu-categories":
        filename = "menucategories.json";
        break;
      case "/categories":
        filename = "categories.json";
        break;
      case "/categories?home=true":
        filename = "categories.json";
        break;
      case "/vod":
        filename = "vod.json";
        break;
      case "/categories?id=1":
        filename = "livenews.json";
        break;
      case "/categories?id=2":
        filename = "movies.json";
        break;
      case "/categories?id=3":
        filename = "sport.json";
        break;
      case "/categories?id=4":
        filename = "tvseries.json";
        break;
      case "/favicon.ico":
        filename = filename;
        break;
      default:
        filename = "categories.json";
    }
    fs.readFile(path.join(__dirname, `/${filename}`), (err, data) => {
      if (data) res.end(data.toString());
    });
  })
  .listen(8088);
