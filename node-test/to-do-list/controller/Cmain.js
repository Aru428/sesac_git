const { commentInfos } = require("../model/data");

exports.test = (req, res) => {
  res.send("hello express");
};

exports.getTest = (req, res) => {
  const data = commentInfos();
  res.send(data);
  console.log(data);
};
