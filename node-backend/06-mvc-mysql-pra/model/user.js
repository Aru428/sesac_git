const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234qwer*",
  database: "sesac_test",
});

exports.selectUser = (cb) => {
  const sql = `select * from user2`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    cb(result);
  });
};

exports.insertUser = (data, cb) => {
  const sql = `insert into user2 (userid, pw, name) values ('${data.userid}', '${data.pw}', '${data.name}')`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    cb(result.insertId);
  });
};

exports.deleteUser = (id, cb) => {
  const sql = `delete from user2 where id = ${id}`;

  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    cb();
  });
};
