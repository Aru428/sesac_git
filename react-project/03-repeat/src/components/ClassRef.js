import { Component, createRef } from "react";

class ClassRef extends Component {
  input2 = createRef();

  // 콜백함수를 이용하여 ref를 지정했을 때, ref 변수를 사용하는 방법
  focusInput = () => {
    this.input.focus();
  };

  focusInput2 = () => {
    // this.input2.current -> 이게 input 태그
    this.input2.current.focus();
  };

  render() {
    return (
      <>
        <br />
        {/* 콜백함수를 이용하여 ref 지정 */}
        <input
          type="text"
          ref={(ref) => {
            // ref에 콜백함수를 넘길 때 첫번째 매개변수는
            // ref 걸려 있는 요소를 담고 있다.
            this.input = ref;
          }}
        />
        <button type="button" onClick={this.focusInput}>
          버튼
        </button>

        <input type="text" ref={this.input2} />
        <button type="button" onClick={this.focusInput2}>
          버튼
        </button>
      </>
    );
  }
}

export default ClassRef;
