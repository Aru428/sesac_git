// State 실습2
import { useState } from "react";

function PracState2() {
  const [number, setNumber] = useState(0);
  const increase = () => setNumber((prevNum) => prevNum + 1);
  const decrease = () => setNumber((prevNum) => prevNum - 2);

  return (
    <>
      <div>함수형 컴포넌트 state {number}</div>
      <button onClick={increase}>+1</button>{" "}
      <button onClick={decrease}>-2</button>
    </>
  );
}

export default PracState2;
