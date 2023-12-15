const express = require("express");
const app = express();
const PORT = 8000;

// 메인페이지 관련 라우터
const router = require("./routes");
app.use("/", router);

// 회원 관련 라우터
const userRouter = require("./routes/user");
app.use("/user", userRouter);

// 투두 리스트 관련 라우터
const tasksRouter = require("./routes/tasks");
app.use("/tasks", tasksRouter);

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
