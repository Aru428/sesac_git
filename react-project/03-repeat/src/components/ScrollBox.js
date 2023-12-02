import { useRef } from "react";

function ScrollBox() {
  const box = useRef();
  const scrollTop = () => {
    box.current.scrollTop = 0;
  };
  return (
    <>
      <div className="scroll-box" ref={box}>
        <h1>hello hello hello</h1>
        <h1>hello hello hello</h1>
        <h1>hello hello hello</h1>
        <h1>hello hello hello</h1>
        <h1>hello hello hello</h1>
        <h1>hello hello hello</h1>
        <h1>hello hello hello</h1>
        <h1>hello hello hello</h1>
        <h1>hello hello hello</h1>
      </div>
      <button onClick={scrollTop}>버튼</button>
    </>
  );
}

export default ScrollBox;
