// let str
let str: string = "hello";

// str = 5; -> error
console.log(str);

let num: number;
num = 5;

let undif: undefined;
let nu: null = null;

// array 배열
let arr: number[] = [1, 2, 3, 4, 5];

let strArr: string[] = ["abc", "def"];
let strArr2: Array<string> = ["abc", "def"];

let abc: number | string = "a";
console.log(abc); // a
abc = 5;
console.log(abc); // 5

let numStrArr: (number | string)[];
numStrArr = [1, "a"];
console.log(numStrArr);

// 타입스크립트에서 any를 사용하는건 지양해야 함
let anyArr: any[] = [1, "a", null, [0]];
console.log(anyArr);

let obj: object = {
  name: "sohee",
};

// tuple : 순서와 개수가 정해져 있는 배열
let drink: [string, number] = ["cola", 2500];
drink[0] = "cider";
console.log(`${drink[0]}은 ${drink[1]}원 입니다`);
// drink.push("aaa") <- 타입스크립트가 탐지 불가, error라고 인식 안함 -> 그러나 잘못된 코드

// readonly : 읽기만 가능하며, 데이터를 변경할 수 없음.
let drink2: readonly [string, number] = ["cola", 2500];

// enum : 숫자 열거형과 문자 열거형, 값들에 미리 이름을 정의하고 사용하는 타입
enum Weather {
  sun,
  rain,
  cloud,
}
console.log(Weather);

const weather = 0;

if (weather == Weather.sun) {
  console.log("날씨가 맑음입니다");
}

let aaaa: Weather = 0; // aaaa = 0

enum Weather2 {
  sun = "sun",
  rain = "rain",
  cloud = "cloud",
}
