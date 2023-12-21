const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const PORT = 8000;

// cors 이슈 : 다른 서버에서 보내는 요청을 제한함
const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const userIdArr = {};
// { socket.id: "userId", socket.id: "userId" ... }

// [실습 5번] DM 보내기
const updateUserList = () => {
  io.emit("userList", userIdArr);
};

io.on("connection", (socket) => {
  console.log("socket id", socket.id);
  // [실습 3번] socket id를 이용해 입장 공지
  // io.emit("notice", { msg: `${socket.id}님이 입장하셨습니다.` });

  // [실습 3-1번] 입장 시에 받은 userId로 입장
  // socket.on("entry", (res)=>{
  //   io.emit("notice", { msg: `${res.userId}님이 입장하셨습니다.` });
  //   userIdArr[socket.id] = res.userId;
  // });

  // [실습 3-2번] 닉네임 중복 방지
  // 상황(닉네임이 중복되는지)에 따라 정상적으로 notice를 하던지
  // 중복된다는 오류 메세지를 보내주던지
  socket.on("entry", (res) => {
    // Object.values(userIdArr) => ["userIda", "userIdb", "userIdc"]
    // includes : 문자열이나 배열에서 인자로 넘겨준 값이 존재 여부 확인 가능
    // indexOf : 배열에서 인자로 넘겨준 값의 인덱스를 주출, 없다면 -1을 반환
    if (Object.values(userIdArr).includes(res.userId)) {
      // 닉네임이 중복될 경우에
      socket.emit("error", {
        msg: "중복된 아이디가 존재하여 입장이 불가합니다.",
      });
    } else {
      // 닉네임이 중복되지 않을 경우에
      io.emit("notice", { msg: `${res.userId}님이 입장하셨습니다.` });
      socket.emit("entrySuccess", { userId: res.userId });
      userIdArr[socket.id] = res.userId;
    }
    console.log(userIdArr);
    updateUserList();
  });

  // [실습 3-3번] 퇴장시키기 -> 누가 입장하고 있는지 알아야 하고, 해당 정보를 전체적으로 저장할 필요가 있었다.
  socket.on("disconnect", () => {
    if (userIdArr[socket.id]) {
      io.emit("notice", { msg: `${userIdArr[socket.id]}님이 퇴장하셨습니다.` });
      delete userIdArr[socket.id];
    }
    console.log(userIdArr);
    updateUserList();
  });

  // [실습 4번] 채팅창 메세지 전송
  socket.on("sendMsg", (res) => {
    if (res.dm === "all") io.emit("chat", { userId: res.userId, msg: res.msg });
    else {
      // io.to(소켓아이디).emit() : 해당 소켓아이디한테만 보내겠다.
      io.to(res.dm).emit("chat", {
        userId: res.userId,
        msg: res.msg,
        dm: true,
      });
      socket.emit("chat", { userId: res.userId, msg: res.msg, dm: true });
    }
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
