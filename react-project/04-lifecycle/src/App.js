import { useState } from "react";
import "./App.css";
import LifeCycleFunc from "./components/LifeCycleFunc";
import LifeCycleClass from "./components/LifeCycleClass";
import PracLifeCycle from "./components/PracLifeCycle";

function App() {
  const [number, setNumber] = useState(0);
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>plus</button>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? "OFF" : "ON"}
      </button>
      {/* {isShow && <LifeCycleFunc number={number} />} */}
      {/* {isShow && <LifeCycleClass number={number} />} */}

      <PracLifeCycle />
    </div>
  );
}

export default App;
