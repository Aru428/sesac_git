import PropTypes from "prop-types";

function PropsPrac({ food }) {
  return (
    <>
      {/* Props 실습 1 */}
      <div>
        내가 좋아하는 음식은 <span className="PropsPrac__span">{food}</span>{" "}
        입니다.
      </div>
    </>
  );
}

PropsPrac.defaultProps = {
  food: "떡볶이",
};

PropsPrac.propTypes = {
  food: PropTypes.string,
};

export default PropsPrac;
