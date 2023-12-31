// const FuncComponent = () => {
//   return;
//   <div>함수형 컴포넌트 입니다</div>;
// };

import image from "./react-logo.png";

function FuncComponent() {
  const text = "hello?";
  const name = "richard";

  const ifRenderTest = () => {
    if (name === "lily") {
      return "안녕하세요!";
    } else if (name === "richard") {
      return "안녕하세요...";
    } else {
      return "누구세요?";
    }
  };

  const style = { fontSize: "20px", color: "yellow" };

  return (
    <>
      {/* 1. 하나의 태그로 감싸서 return */}
      <div>함수형 컴포넌트 입니다 1.</div>
      <div>함수형 컴포넌트 입니다 2.</div>

      {/* 2. js 문법 사용 가능 (변수) */}
      <h3>코딩온 {text}</h3>

      {/* 2. js 문법 사용 가능 (삼항 연산자를 조건에 따른 렌더링 (간단))  */}
      <h4>{name === "lily" ? "안녕하세요!" : "누구세요?"}</h4>

      {/* 2-1. 복잡한 조건을 이용하고 싶다면? -> 위에서 함수로 만들어 사용 */}
      <h4>{ifRenderTest()}</h4>

      {/* 2-2. 조건에 따른 렌더링 ( && ) */}
      <h5>{name === "richard" && "안녕하세요!"}</h5>

      {/* 3. inline style 적용 방법 */}
      <div style={{ fontSize: "20px", color: "crimson" }}>hello</div>
      <div style={style}>hello</div>

      {/* 4. class와 onclick을 jsx에서 사용하기 */}
      <div className="test-css">jsx에서 css 사용하기 (className)</div>

      {/* html에서는 함수를 호출, jsx에서는 함수를 선언 */}
      <button
        onClick={() => {
          console.log("hello");
        }}
      >
        버튼
      </button>

      {/* 5. 종료 태그 필수! */}
      <br />

      {/* / 경로가 public 폴더 안이다. */}
      <img src="/logo192.png" alt="이미지" />
      {/* src 내부의 이미지 사용할 경우 -> 위에서 이미지를 import 해오기 */}
      <img src={image} alt="이미지" />
    </>
  );
}

export default FuncComponent;
