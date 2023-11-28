function JsxPracComponent() {
  const name = "로이";
  const animal = "강아지";
  const title = "Hello World";
  let a = 10;
  let b = 3;

  return (
    <>
      {/* Jsx 실습 1 */}
      <h2>
        제 반련 동물의 이름은 <u>로이</u>입니다. <br />
        <u>{name}</u>는 <u>{animal}</u> 입니다.
      </h2>

      {/* Jsx 실습 2 */}
      <div>{3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</div>

      {/* Jsx 실습 3 */}
      <div>{a > b && "a가 b보다 큽니다"}</div>

      {/* Jsx 실습 4 */}
      <div className="title">{title}</div>
      <div className="component4">
        <div>
          <span>아이디: </span>
          <input type="text"></input>
        </div>
        <div>
          <span>비밀번호: </span>
          <input type="password"></input>
        </div>
      </div>
    </>
  );
}

export default JsxPracComponent;
