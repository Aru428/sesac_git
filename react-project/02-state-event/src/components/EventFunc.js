import { useState } from "react";

function EventFunc() {
  const [msg, setMsg] = useState("hello");
  const [name, setName] = useState("");

  const handleOnClick = (e) => {
    console.log(e.target);
    setMsg("bye");
  };

  function handleOnClickHello() {
    setMsg("Hello");
  }

  const handleOnClickTest = (message) => {
    setMsg(message);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      console.log("엔터가 눌렸습니다!");
    }
  };

  return (
    <>
      <h3>함수형 컴포넌트 event 핸들링 공부</h3>

      <div>
        {msg}

        <button onClick={handleOnClick}>잘 가</button>
        <button onClick={handleOnClickHello}>안녕</button>

        {/* 함수에서 매개변수를 받고 싶으면 어떻게 하나요? */}
        {/* 방법 1 : onClick에서 익명함수를 선언하고, 그 내부에서 함수를 실행시킨다. */}
        {/* <button
          onClick={() => {
            handleOnClickTest("안녕?");
          }}
        >
          테스트
        </button> */}

        {/* 방법 2 : bind를 이용 */}
        {/* bind의 첫 번째 매개변수는 . 앞에 있는 함수(handleOnClickTest)의 this를 결정한다 */}
        <button onClick={handleOnClickTest.bind(null, "안녕")}>테스트</button>

        <br />

        {/* input 태그에서 엔터를 누르면 "엔터를 눌렀습니다!" 라는 문구가 콘솔에 찍히도록 */}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyDown={handleEnter}
        />
      </div>
    </>
  );
}

export default EventFunc;
