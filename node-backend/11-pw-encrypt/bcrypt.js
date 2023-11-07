const bcrypt = require("bcrypt");

const salt = 10;

function bcryptPw(pw) {
  return bcrypt.hashSync(pw, salt);
}

console.log("pw 1234: ", bcryptPw("1234"));

const dbPw = "$2b$10$6GnqdvXsg3wlCUGoW1hsuOOmWaIJTCTrPnLcIljvLqprFCGtj/WZW";
function comparePw(pw, dbPw) {
  return bcrypt.compareSync(pw, dbPw);
}

console.log("pw compare: ", comparePw("1234", dbPw));
