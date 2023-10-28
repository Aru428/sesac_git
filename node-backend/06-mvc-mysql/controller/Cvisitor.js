const Visitor = require("../model/Visitor");

exports.home = (req, res) => {
  res.render("index");
};

exports.visitor = (req, res) => {
  // const data = Visitor.getVisitors();
  // res.render("visitor", {data: data});

  Visitor.getVisitors((rows) => {
    res.render("visitor", { data: rows });
  });
};

// POST 요청  /visitor => 방명록 insert
exports.postVisitor = (req, res) => {
  // insert할 데이터
  console.log("req.body", req.body);
  Visitor.insertVisitor(req.body, (id) => {
    console.log("ctrl postVisitor ", id);
    res.send({
      ...req.body,
      id,
    });
  });
};

// PATCH 요청  /visitor/:id => 방명록 수정

// DELETE 요청  /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  console.log("req.params", req.params);
  Visitor.delVisitor(req.params.id, (result) => {
    res.send({ result: true });
  });
};
