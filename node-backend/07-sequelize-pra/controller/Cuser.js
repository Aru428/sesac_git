const { User } = require("../model");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};
exports.post_signup = (req, res) => {
  // insert into (userid, name, pw) values (???,???,???);
  const data = {
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  };

  User.create(data)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send("오류 발생");
    });
};

exports.signin = (req, res) => {
  res.render("signin");
};
exports.post_signin = (req, res) => {
  // select * from user2 where userid = ??? and pw = ??? limit 1;
  User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    res.send({ result: true, id: result.id });
  });
};

exports.profile = (req, res) => {
  // select * from user where id = ??? limit 1;
  User.findOne({
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    res.render("profile", { data: result });
  });
};

exports.profile_edit = (req, res) => {
  // update user2 set name = ???, pw = ??? where id = ???;
  const data = {
    pw: req.body.pw,
    name: req.body.name,
  };
  User.update(data, {
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.send({ result: true });
  });
};

exports.profile_delete = (req, res) => {
  // delete from user2 where id = ???;
  User.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    res.send({ result: true });
  });
};
