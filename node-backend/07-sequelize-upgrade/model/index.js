const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require("./Customer")(sequelize, Sequelize);
db.Orders = require("./Orders")(sequelize, Sequelize);

// 1:N 관계
db.Customer.hasMany(db.Orders, {
  // onDelete: "CASCADE",
  foreignKey: "custid",
  // sourceKey: "custid",
});
db.Orders.belongsTo(db.Customer, {
  // onDelete: "CASCADE",
  foreignKey: "custid",
  // targetKey: "custid",
});

module.exports = db;
