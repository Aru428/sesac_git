const express = require("express");
const multer = require("multer"); // multer 불러오기
const path = require("path");

const app = express();
const PORT = 8000;

app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      const fileName = req.body.id + "_" + Date.now() + ext;

      done(null, fileName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/upload", uploadDetail.single("file"), function (req, res) {
  console.log("file detail:", req.file);
  console.log("body detail:", req.body);

  res.render("result", {
    src: req.file.path,
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
    age: req.body.age,
  });
});

app.post(
  "/upload/dynamicfile",
  uploadDetail.single("file"),
  function (req, res) {
    res.send({
      src: req.file.path,
      id: req.body.id,
      pw: req.body.pw,
      name: req.body.name,
      age: req.body.age,
    });
  }
);

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});
