import { Component } from "react";
import PropTypes from "prop-types";

class PropsPrac3 extends Component {
  render() {
    return (
      <>
        <div>text: {this.props.text}</div>
        <button
          onClick={() => {
            console.log(this.props.valid);
          }}
        >
          버튼
        </button>
      </>
    );
  }

  static defaultProps = {
    text: "이건 기본 text props입니다.",
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    valid: PropTypes.string,
  };
}

export default PropsPrac3;
