// 이벤트 핸들링 실습 3
import { useState } from "react";

function PracEvent3() {
  const [msg, setMsg] = useState("안녕하세요");
  const [btn, setBtn] = useState("사라져라");

  const onChangeMsg = () => {
    if (msg === "안녕하세요") {
      setMsg("");
      setBtn("보여라");
    } else {
      setMsg("안녕하세요");
      setBtn("사라져라");
    }
  };

  return (
    <>
      <button onClick={onChangeMsg}>{btn}</button>
      <h2>{msg}</h2>
    </>
  );
}

export default PracEvent3;
