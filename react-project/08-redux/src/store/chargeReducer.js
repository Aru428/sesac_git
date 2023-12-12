const initialValue = { money: 0 };
const INPUT = "charge/INPUT";
const OUTPUT = "charge/OUTPUT";

export const input = () => ({ type: INPUT });
export const output = () => ({ type: OUTPUT });

const chargeReducer = (state = initialValue, action) => {
  switch (action.type) {
    case INPUT:
      return { money: state.money + action.value };
    case OUTPUT:
      return { money: state.money - action.value };
    default:
      return state;
  }
};

export default chargeReducer;
