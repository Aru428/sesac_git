show databases;

-- 데이터 베이스 생성하는 명령어
CREATE DATABASE sesac_test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;

-- 데이터 베이스 선택하는 명령어
use sesac_test;

-- 테이블을 생성하는 명령어
create table user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
    age int unsigned
);

-- 만들어진 테이블에
-- 1) 컬럼을 추가하는 명령어
alter table user add gender enum('여자', '남자') not null;
-- 2) 컬럼을 삭제하는 명령어
alter table user drop column age;
-- 3) 컬럼을 수정하는 명령어
alter table user modify gender varchar(2) not null;

-- 테이블을 삭제하는 명령어
drop table user;

-- 테이블을 조회하는 명령어 (데이터 베이스가 선택이 되어 있어야 함.)
show tables;

-- 실습 | DDL 사용하기
create table member(
	id varchar(20) primary key not null,
    name varchar(5) not null,
    age int unsigned,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);
alter table member modify id varchar(10);
alter table member drop column age;
alter table member add interest varchar(100);

-- insert 문 (데이터 추가)
insert into user (id, password) values ('lily', '1234');
insert into user values ('lily2', '1234', 99);

-- select 문 (데이터 조회)
-- SELECT [속성...] FROM [테이블이름] [WHERE [조건]]
-- user라는 테이블의 모든 값을 조회하겠다.
select * from user;
-- user 테이블의 id 속성을 모두 조회
select id from user;