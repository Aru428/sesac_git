const data = {
  name: "sohee",
  gender: "여자",
};

const jsonData = JSON.stringify(data); // 직렬화
console.log("json", jsonData);
console.log("js object", JSON.parse(jsonData)); // 역직렬화
