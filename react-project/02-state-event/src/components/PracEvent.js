// 이벤트 핸들링 실습 1
import { Component } from "react";

class PracEvent extends Component {
  state = {
    text: "Hello World!",
  };

  handleOnClickBye = () => {
    this.setState({ text: "Goodbye World!" });
  };

  render() {
    return (
      <>
        <h2>{this.state.text}</h2>
        <button onClick={this.handleOnClickBye}>클릭</button>
      </>
    );
  }
}

export default PracEvent;
