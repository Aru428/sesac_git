const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http모듈로 생성된 서버에서만 동작
const server = http.createServer(app);
const PORT = 8000;

const io = require("socket.io")(server);
// 위와 동일한 코드
// const Socket = require("socket.io")
// const io = Socket(server)

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("client1");
});

io.on("connection", (socket) => {
  // 콜백함수의 매개변수에 있는 socket 객체
  // 접속한 클라이언트의 소켓
  console.log("socket id", socket.id);

  // on을 이용해, 클라이언트에서 socket을 이용해서 보내준 데이터를
  // 받을 이벤트를 등록함.
  socket.on("hello", (res) => {
    // res : socket을 이용해 보내준 데이터
    console.log(res);
    socket.emit("bye", { message: "안녕히 가세요~" });
  });

  socket.on("entry", (res) => {
    // io : 전체 클라이언트 대상
    io.emit("notice", {
      message: `${socket.id}님이 입장했습니다.`,
    });
  });

  socket.on("hi", (res) => {
    console.log("client :", res.text);
    socket.emit("send", { msg: "hello : 안녕하세요." });
  });
  socket.on("study", (res) => {
    console.log("client :", res.text);
    socket.emit("send", { msg: "study : 공부합시다!" });
  });
  socket.on("bye", (res) => {
    console.log("client :", res.text);
    socket.emit("send", { msg: "bye : 잘가!" });
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
