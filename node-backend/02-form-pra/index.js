const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/get", function (req, res) {
  res.send("get 요청 성공");
});

app.post("/post", function (req, res) {
  res.send("post 요청 성공");
});

app.listen(PORT, function () {
  console.log(`Sever Open : ${PORT}`);
});
