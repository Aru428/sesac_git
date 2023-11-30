import { useState } from "react";

function StateFunc() {
  // useState는 배열을 반환 -> 그 배열을 구조분해 하여 number와 setNumber 선언
  // [state 변수, state를 변경시키는 함수] = useState(state 초기값)
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("hello");
  const changeText = () => {
    setText((prevText) => {
      // if (prevText === "hello") {
      //   return "bye";
      // } else {
      //   return "hello";
      // }
      return prevText === "hello" ? "bye" : "hello";
    });
  };

  return (
    <>
      <h3>함수형 컴포넌트 state 공부</h3>
      <div>
        number state value {number}{" "}
        <button
          onClick={() => {
            // 아래처럼 하면 +2가 되지 않음
            // setNumber(number + 1);
            // setNumber(number + 1);

            setNumber((prevNumber) => prevNumber + 1);
            setNumber((prevNumber) => prevNumber + 1);
          }}
        >
          +1
        </button>
      </div>
      <div>
        {text} <button onClick={changeText}>버튼</button>
      </div>
    </>
  );
}

export default StateFunc;
