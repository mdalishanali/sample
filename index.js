const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});
app.listen(8080, () => {
  try {
    console.log("serveris started");
  } catch (error) {
    console.log("error: ", error);
  }
});
