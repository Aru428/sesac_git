const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const dotenv = require("dotenv");
// corss-env
// 배포버전이냐? 개발버전이냐? 에 따라 다른 env파일을 로드할 수 있게끔 도와줌

// console.log(process.env);
// nodejs 환경변수 확인

// dotenv.config();
// index.js와 같은 위치에 있는 .env파일을 불러와서 환경변수로 사용할 수 있게끔 함.

dotenv.config({ path: path.join(__dirname, "./config/envs/.env") });
// index.js와 다른 위치에 있는 env파일을 사용
dotenv.config({
  path: path.join(__dirname, `./config/envs/${process.env.NODE_ENV}.env`),
});
console.log("password: ", process.env.PASSWORD);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT, () => {
  console.log("Server Port : ", process.env.PORT);
});
