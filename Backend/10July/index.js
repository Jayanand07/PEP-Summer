const fs = require("fs");
const data = require("./data");

const http = require("http");

const server = http.createServer((req, res) => {
  const arr = fs.readFileSync("arr.json", "utf-8");

  console.log(arr);

  
  console.log(res);

  const resData = {
    data: data,
    arr: arr,
    "test": "hello from test"
  };

  if (req.url == "/test") {
    res.end(JSON.stringify(resData));
  }
});

server.listen(3000);

























