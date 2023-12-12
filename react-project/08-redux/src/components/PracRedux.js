import { useState } from "react";
import { useDispatch } from "react-redux";

export function PracRedux(props) {
  const { money, input, output } = props;
  const [value, setValue] = useState();

  const dispatch = useDispatch();
  //   console.log(input, input.type);
  const chargeInput = () =>
    dispatch({ type: input.type, value: Number(value) });
  const chargeOutput = () =>
    dispatch({ type: output.type, value: Number(value) });
  return (
    <>
      <h2>코딩온 은행</h2>
      <h3>잔액: {money}원</h3>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
      />
      <button onClick={chargeInput}>입금</button>
      <button onClick={chargeOutput}>출금</button>

      <br />
      <br />
    </>
  );
}
