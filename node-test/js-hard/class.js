// PascalCase 규칙을 이용해서 식별자 생성
class Cat {
  // 생성자 : 메소드의 일종
  // (메소드 중에서) Cat 클래스를 이용해서 객체를 만드는 순간에 호출되는 메소드
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메소드
  mew() {
    console.log("야옹");
  }

  // 고양이의 정보를 콘솔로 찍는 메소드
  info() {
    console.log(`이름은 : ${this.name}, 나이는 : ${this.age}`);
  }
}

// Cat 클래스를 이용해서 새로운 객체를 만들겠다
// new 키워드를 이용해 미리 만들어둔 클래스 형태의 객체 생성 (instance화)
const cat4 = new Cat("나비", 2);
const cat5 = new Cat("장화", 80);
cat4.mew();
cat4.info();

class House {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    console.log(
      `이 건물은 ${new Date().getFullYear() - this.year}년 됐습니다.`
    );
  }
}

const home = new House("새싹", 2022);
home.age();

class Apartment extends House {
  constructor(name, year, floor) {
    // 부모 클래스(House)의 생성자 호출
    super(name, year);
    this.floor = floor;
  }

  // 오버라이딩 : 부모에 있는 메소드를 자식이 다시 정의하는 것
  age() {
    super.age();
    console.log(`입주는 ${this.year + 1}년부터 시작했습니다.`);
  }
}

const apart = new Apartment("래미안 아파트", 2013, 25);
apart.age();

function test(a, b) {
  console.log(`a: ${a}, b: ${b}`);
}
function test(a, b, c) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

// 오버로딩 : 똑같은 이름으로 여러개의 함수를 선언하는 것 (매개변수가 다르다)
test(2, 5);

// 실습. Shape 클래스 만들기
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());
