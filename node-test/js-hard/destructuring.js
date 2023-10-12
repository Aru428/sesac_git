const fruits = ["apple", "banana", "grape"];

const [apple2, banana2, grape2, strawberry2 = "strawberry"] = fruits;
console.log(apple2, strawberry2);

// 사실상 아래 코드와 동일한 작업을 하고 있음
// const apple2 = fruits[0]
// const banana2 = fruits[1]
// const grape2 = fruits[2]

let x = 1,
  y = 3;
[x, y] = [y, x];
console.log(x, y);

const obj = {
  name: "lily",
  gender: "여",
  age: 99,
};

const { age, name: name2, test = "test" } = obj;
console.log(age, test, name2);

// 사실상 아래 코드와 동일한 작업을 하고 있음
// const age = obj.age;
// const name = obj.name;

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];
// spread(...) 연산자
// ...[1, 2, 3, 4, 5] => 1, 2, 3, 4, 5
const arr3 = [...arr1, ...arr2];
console.log("arr3", arr3);

const hello = [..."hello"];
console.log(hello);

// 실습 - spread 연산자 사용하기
const word1 = "abc";
const word2 = "xyz";
const word3 = [...word1, ...word2];
console.log(word3);

const obj2 = {
  name: "lily",
  gender: "여",
  age: 99,
};

const obj3 = {
  ...obj2,
  test: "test",
};
console.log("obj3", obj3);

const values = [10, 20, 30];
function get(a, ...rest) {
  console.log(a);
  console.log(rest);
}
get(...values);
