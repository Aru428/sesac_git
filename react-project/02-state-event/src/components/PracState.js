// State 실습1
import { Component } from "react";

class PracState extends Component {
  state = {
    number: 0,
  };

  render() {
    const { number } = this.state;
    return (
      <>
        <div>클래스형 컴포넌트 state {number}</div>
        <button
          onClick={() => {
            this.setState((prevNum) => ({ number: prevNum.number + 1 }));
            this.setState((prevNum) => ({ number: prevNum.number + 1 }));
          }}
        >
          +2
        </button>{" "}
        <button
          onClick={() => {
            this.setState((prevNum) => ({ number: prevNum.number - 1 }));
          }}
        >
          -1
        </button>
      </>
    );
  }
}

export default PracState;
