const initialValue = { number: 100 };
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 발생할 수 있는 action을 return 하는 함수
// 왜 만들었나요? 액션 type의 이름이 바뀐다라고 가정하면, 액션을 발생시키는 모든 곳(dispatch)에서
// action.type을 다 변경해줘야 함.
// 이를 해결하기 위해 만듦
// 내부에서 사용하는 것이 아닌 외부에서 사용
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

const counterReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "INCREMENT":
    case INCREMENT: // action.type의 이름이 동일할 때를 해결하기 위해
      return { number: state.number + 1 };
    case "DECREMENT":
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
