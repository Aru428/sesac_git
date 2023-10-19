const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/ajax", function (req, res) {
  console.log(req.query);
  // { key : value, key : value } 이런 형태의 객체가 query
  res.send(req.query);
});

app.post("/ajax", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.get("/axios", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  console.log(req.body);
  const data = {
    ...req.body,
    msg: "반가워요",
  };
  //   {
  //     id: ,
  //     name: ,
  //     pw: ,
  //     msg: "반가워요",
  //   };
  res.send(data);
});

app.get("/fetch", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

app.post("/fetch", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 실습 2번 참고
app.post("/~~~", function (req, res) {
  const id = "lily";
  const pw = "1234";
  // req.body 와 id, pw를 비교하는 코드 작성
  // 일치 X -> "로그인 실패"
  // 일치 O -> "로그인 성공"
});

app.listen(PORT, function () {
  console.log(`Sever Open : ${PORT}`);
});
