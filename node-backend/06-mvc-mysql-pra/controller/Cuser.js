const user = require("../model/user");

exports.main = (req, res) => {
  res.render("index");
};

exports.axiosLogin = (req, res) => {
  user.selectUser((result) => {
    let flag = 0;
    let index = 0;
    let data;

    for (let i = 0; i < result.length; i++) {
      if (
        req.body.userid == result[i].userid &&
        req.body.password == result[i].pw
      ) {
        flag = 1;
        index = i;
        break;
      }
    }

    if (flag == 1) {
      data = {
        isSuccess: true,
        msg: `${result[index].name}님 환영합니다!`,
      };
    } else {
      data = {
        isSuccess: false,
        msg: "아이디 또는 비밀번호를 잘못 입력했습니다.",
      };
    }

    res.send(data);
  });
};

exports.register = (req, res) => {
  res.render("signup");
};

exports.postUser = (req, res) => {
  user.insertUser(req.body, (id) => {
    res.send({
      ...req.body,
      id,
    });
  });
};
