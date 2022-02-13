const os = require("os");
const fs = require("fs");
const http = require("http");
const PORT = 8000;

const timestamp = new Date().toString();
console.log(timestamp);

fs.writeFileSync("current_time_stamp.txt", timestamp);

http.createServer((req, res) => {
   
   

    fs.readFile("current_time_stamp.txt", (err, data) => {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(PORT, () => {
    console.log("listening to" + PORT);
  });
