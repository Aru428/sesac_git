const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.main);

router.get("/signup", controller.register);

// 로그인
router.post("/axios", controller.axiosLogin);

// 회원가입
router.post("/signup", controller.postUser);

module.exports = router;
