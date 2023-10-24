-- select문을 위한 세팅
CREATE TABLE customer
(
custid CHAR(10) NOT NULL PRIMARY KEY,
custname VARCHAR(10) NOT NULL,
addr CHAR(10) NOT NULL,
phone CHAR(11),
birth DATE
);

CREATE TABLE orders
(
orderid INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
custid CHAR(10) NOT NULL,
prodname CHAR(6) NOT NULL,
price INT NOT NULL,
amount SMALLINT NOT NULL,
FOREIGN KEY (custid) REFERENCES customer(custid) on delete cascade
);

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍지수', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

select * from customer;
select * from orders;

-- where 절
-- custid가 bunny인 회원
select * from customer where custid = 'bunny';
-- custid가 bunny가 아닌 회원
select * from customer where custid != 'bunny';
select * from customer where not custid = 'buuny';
-- 2000-01-01 이후에 태어난 회원 조회
select * from customer where birth >= '2000-01-01';
-- 2000-01-01 ~ 2005-01-01 사이에 태어난 회원 조회
select * from customer where birth between '2000-01-01' and '2005-01-01';
-- addr가 대한민국 서울, 미국 로스앤젤레스 둘 중 하나라면 조회
select * from customer where addr in('대한민국 서울', '미국 로스앤젤레스');
-- addr에서 대한민국을 포함하고 있는 모든 값을 조회 (like 이용)
select * from customer where addr like '%대한민국%';
select * from customer where custname like '__수';
select * from customer where custname like '%해_';
-- is null 사용 예시
select * from customer where custname is null;
-- AND, OR, NOT
select * from customer where addr like '%대한민국%' and birth <= '2005-01-01';
select * from customer where addr like '%대한민국%' or birth <= '2005-01-01';

-- order by 절 (정렬)
select * from customer order by custname asc;
select * from customer order by custname desc;
select * from customer where addr like '%대한민국%' order by custname desc;

-- limit : 출력 개수 제한
select *
from customer
where addr like '%대한민국%'
order by custname desc
limit 1;

-- distinct : 중복된 데이터 제외해서 조회
select distinct addr from customer;

-- 집계함수
-- 사람별 주문 건수
-- select에서 group by를 쓸 때, group by 뒤에 쓴 속성과 집계함수로 새로 만든 속성만 출력.
select custid, count(*) as 'cust_orders' from orders group by custid;
-- 사람별로 구매한 상품의 개수
select custid, sum(amount) as 'total_amount' from orders group by custid;
-- 사람별로 구매한 상품의 개수 조회하는데, 구매한 상품의 개수가 5개 이상인 경우만 조회
select custid, sum(amount) as 'total_amount' from orders group by custid having total_amount >= 5;
-- 사람별로 결제한 금액
select custid, sum(amount*price) as 'total_price' 
from orders 
group by custid;

-- inner join
-- 주문별 배송지 조회 => customer, orders를 inner join
select customer.addr, orders.*
from customer inner join orders on customer.custid = orders.custid;