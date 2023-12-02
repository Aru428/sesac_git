import { useRef } from "react";

function FuncRef() {
  const input = useRef();
  // const localVar = 0;
  const localVar = useRef(0);

  const focusInput = () => {
    input.current.focus();
  };

  const plusLocalVar = () => {
    localVar.current++;
    console.log(localVar.current);
  };

  return (
    <>
      <input type="text" ref={input}></input>
      <button type="button" onClick={focusInput}>
        버튼
      </button>
      {/* localVar는 state변수가 아니기 때문에 값이 바뀌어도 렌더링되지 않는다. */}
      <div>{localVar.current}</div>
      <button type="button" onClick={plusLocalVar}>
        버튼
      </button>
    </>
  );
}

export default FuncRef;
