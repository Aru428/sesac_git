const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize( // sequelize 객체를 만든다
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize: sequelize, Sequelize: Sequelize }

// const Visitor = require("./Visitor");
// db.Visitor = Visitor(sequelize, Sequelize);
// 아래와 동일한 과정

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// db.Visitor에는 sequelize로 visitor 테이블을 정의한 객체를 담음

// db.User = require("./User")(sequelize, Sequelize);

module.exports = db;
