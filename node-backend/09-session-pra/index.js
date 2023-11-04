const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session");

app.set("view engine", "ejs");
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    // cookie: {
    //   maxAge: 10000,
    // },
  })
);

app.get("/", (req, res) => {
  res.render("index", { user: req.session.user });
});

app.get("/set", (req, res) => {
  req.session.user = "sohee";
  res.send(req.session.user);
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
