// 이벤트 핸들링 실습 4
import { useState } from "react";
import ColorSelect from "./ColorSelect";

function PracEvent4() {
  const [fruit, setFruit] = useState("/apple.jpg");
  const [backColor, setBackColor] = useState("black");
  const [color, setColor] = useState("white");
  const [msg, setMsg] = useState("text");

  const changeMsg = (e) => {
    setMsg(e.target.value);
  };

  const onClickFruit = (e) => {
    setFruit(e.target.value);
  };

  const onClickBackColor = (e) => {
    setBackColor(e.target.value);
  };

  const onClickColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className="container">
        <form>
          <label>과일 : </label>
          <select onClick={onClickFruit}>
            <option value="/apple.jpg">사과</option>
            <option value="/banana.jpg">바나나</option>
            <option value="/peach.jpeg">복숭아</option>
            <option value="/grape.jpg">포도</option>
          </select>
          <ColorSelect mode="배경" onClickHandler={onClickBackColor} />
          <ColorSelect mode="글자색" onClickHandler={onClickColor} />
          <br />
          내용 :{" "}
          <input
            type="text"
            onChange={changeMsg}
            placeholder="내용을 입력하세요"
          ></input>
        </form>

        <img className="img" src={fruit} alt="과일 이미지"></img>
        <div style={{ backgroundColor: backColor, color: color }}>{msg}</div>
      </div>
      <br />
      <br />
    </>
  );
}

export default PracEvent4;
