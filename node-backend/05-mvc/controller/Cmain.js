const { commentInfos } = require("../model/Comments");

exports.main = (req, res) => {
  res.render("index");
};
// function (req, res) {
//     res.render("index");
// }

exports.comments = (req, res) => {
  const commentData = commentInfos();
  // commentData = [ {
  //   id: 1,
  //   userid: "lily",
  //   date: "2023-10-26",
  //   comment: "hello",
  // },
  // {
  //   id: 2,
  //   userid: "gildong",
  //   date: "2023-10-28",
  //   comment: "hello world",
  // },]
  res.render("comments", {
    commentInfos: commentData,
  });
};
