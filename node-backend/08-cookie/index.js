const express = require("express");
const app = express();
const port = 8000;
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(cookieParser()); // 쿠키를 해석하고 사용할 수 있게 해줌.

const cookieConfig = {
  //   httpOnly: true, // document.cookie 로 접근불가. 서버에서만 쿠키에 접근할 수 있다.
  maxAge: 30000, // ms 단위로 보존하고자 하는 기간을 설정
  // expires: "2023-11-04T18:00" -> 만료기간 설정
  // path: "/", // "/test" -> localhost:8000/test/~~~~ 에서는 쿠키가 존재할 수 있다.
  // secure: true, // https 보안 서버에서만 쿠키를 동작하게 한다.
  // signed: true // 쿠키 암호화 -> req.signedCookies
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/set", (req, res) => {
  // 서버가 쿠키를 만들어서 응답으로 보낸다.
  // key : key1 / value : value1
  res.cookie("key1", "value1", cookieConfig);
  res.cookie("popup", "1", cookieConfig);
  res.send("set cookie");
});

app.get("/get", (req, res) => {
  console.log("cookie: ", req.cookies);
  res.send(req.cookies);
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
