// ---------------- case 2, 3 ----------------
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
module.exports.add = (a, b) => a + b;
module.exports.minus = (a, b) => a - b;
module.exports.PI = 3.14;

// ---------------- case 2, 3 ----------------
// 파일에서 여러 개의 식별자를 객체 형태로 내보내는 경우
// module.exports = {
//   add,
//   minus,
//   PI,
// };

// ---------------- case 1 ----------------
// 파일에서 한 개의 식별자만 내보내는 경우
// module.exports = add;

// {}가 없는 것은 화살표 뒤에 있는 것을 return 하겠다
// const add2 = (a, b) => {
//     return a + b;
// }
