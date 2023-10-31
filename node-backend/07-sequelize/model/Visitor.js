// 테이블의 구조를 정의
// ORM은 객체와 db의 table을 매핑하는 기술
// sequelize를 이용해서 table의 구조를 정의 할 필요가 있음.

function Visitor(Sequelize, DataTypes) {
  return Sequelize.define(
    // 모델(테이블) 정의, sequelize 객체의 define 메소드를 이용해서
    "visitor", // 테이블 이름
    {
      id: {
        //int not null primary key auto_increment,
        type: DataTypes.INTEGER,
        allowNull: false, // true가 기본값
        primaryKey: true, // false가 기본값
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    }, // 컬럼 정의
    {
      tableName: "visitor",
      freezeTableName: true,
      // sequelize에서 간혹 단수로 지정해둔 테이블 이름을 sql문을 날릴 때 복수로 변경을 시키는 경우가 있음
      // insert into visitor ~~ => create()로 실행 => insert into visitors ~~
      timestamps: false,
      // insert, update 시에 그 시간을 자동으로 저장하겠다. (createAt, updateAt) -> 기본값
      // 저장하지 않으려고 false로 지정
    } // 모델 옵션 정의
  );
}

module.exports = Visitor;
