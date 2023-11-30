// 이벤트 핸들링 실습 2
import { useState } from "react";

function PracEvent2() {
  const [msg, setMsg] = useState("검정색 글씨");
  const [color, setColor] = useState("black");

  const changeRed = (e) => {
    setMsg("빨간색 글씨");
    setColor("red");
  };

  const changeBlue = (e) => {
    setMsg("파란색 글씨");
    setColor("blue");
  };

  return (
    <>
      <h2 className={color}>{msg}</h2>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </>
  );
}

export default PracEvent2;
