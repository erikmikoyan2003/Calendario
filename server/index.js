const http = require("http");
const express = require("express");

const app = express();

// Проверка режима
const isDev = process.argv.length > 2 && process.argv[2] == "dev";

if (!isDev) {
  
}

app.post("/api", express.json(), (req, res) => {
  console.log(req)
})

const httpServer = http.createServer(app);
httpServer.listen(80, () => console.log("https запущен"));
