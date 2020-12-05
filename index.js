const express = require("express");
const app = express();
const data = require("./data.json");
const PORT = 3000 || process.env.PORT;

app.get("/api", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

app.listen(PORT, () => {
  console.log("API Working on", PORT);
});
