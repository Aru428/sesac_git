let users = `spreatics//12341234//코딩온
codee//4321//코디
lily//1234//릴리`;

let str = users.split("\n");
// str[0] = spreatics//12341234//코딩온
// str[1] = codee//4321//코디
// str[2] = lily//1234//릴리
const userList = []; // user 정보를 담을 배열
for (let i = 0; i < str.length; i++) {
  let temp = str[i].split("//");
  userList.push({
    userId: temp[0],
    userPw: temp[1],
    userName: temp[2],
  });
}
//console.log(userList);

exports.userInfos = () => {
  return userList;
};
