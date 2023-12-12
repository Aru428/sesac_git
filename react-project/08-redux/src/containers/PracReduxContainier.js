import { useSelector } from "react-redux";
import { PracRedux } from "../components/PracRedux";
import { input, output } from "../store/chargeReducer";

export default function PracReduxContainer() {
  const money = useSelector((state) => state.charge.money);
  //   const chargeInput = () => dispatch(input());
  //   const chargeOutput = () => dispatch(output());
  return (
    <>
      <PracRedux money={money} input={input()} output={output()} />
    </>
  );
}
