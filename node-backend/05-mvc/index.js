const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// [before]
// app.get("/", function (req, res) {
//   res.render("index");
// });

// const router = require("./routes/index") index.js 파일인 경우에는 아래처럼 생략가능, 폴더 이름만 작성해도 접근 가능
const router = require("./routes");
app.use("/", router);
// localhost:8000/~~~~~~ : ~~~~~~가 뭐가 됐든 router로 타고 들어간다.

// 존재하지 않는 get 요청에 대해서
// * : 어떤 router든 상관없다.
app.get("*", function (req, res) {
  res.send("페이지를 찾을 수 없습니다.");
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
