const { userInfos } = require("../model/user");

exports.main = (req, res) => {
  res.render("index");
};

exports.axiosLogin = (req, res) => {
  const userData = userInfos();
  let flag = 0;
  let index = 0;
  let data;
  for (let i = 0; i < userData.length; i++) {
    if (
      req.body.userid == userData[i].userId &&
      req.body.password == userData[i].userPw
    ) {
      flag = 1;
      index = i;
      break;
    }
  }

  if (flag == 1) {
    data = {
      isSuccess: true,
      msg: `${userData[index].userName}님 환영합니다!`,
    };
  } else {
    data = {
      isSuccess: false,
      msg: "아이디 또는 비밀번호를 잘못 입력했습니다.",
    };
  }

  res.send(data);
};
