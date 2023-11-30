// 이벤트 핸들링 실습 4
import { useState } from "react";

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
          과일 :
          <select onClick={onClickFruit}>
            <option value="/apple.jpg">사과</option>
            <option value="/banana.jpg">바나나</option>
            <option value="/peach.jpeg">복숭아</option>
            <option value="/grape.jpg">포도</option>
          </select>
          배경색 :
          <select onClick={onClickBackColor}>
            <option value="black">검정</option>
            <option value="white">하양</option>
            <option value="red">빨강</option>
            <option value="orange">주황</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <option value="blue">파랑</option>
            <option value="purple">보라</option>
            <option value="pink">분홍</option>
          </select>
          글자색 :
          <select onClick={onClickColor}>
            <option value="black">검정</option>
            <option value="white">하양</option>
            <option value="red">빨강</option>
            <option value="orange">주황</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <option value="blue">파랑</option>
            <option value="purple">보라</option>
            <option value="pink">분홍</option>
          </select>
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
