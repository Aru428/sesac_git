import { useState } from "react";
import "./App.css";
import UseCallbackEx from "./components/UseCallbackEx";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseMemoEx from "./components/UseMemoEx";
import UseReducer from "./components/useReducer";
import CustomHookEx from "./components/CustomHookEx";
import PracHook from "./components/PracHook";
import PracUseCallback from "./components/PracUseCallback";

function App() {
  const [postId, setPostId] = useState(1);
  return (
    <div>
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <UseCallbackEx2 postId={postId} />
      <button onClick={() => setPostId(postId + 1)}>+1</button>
      <hr />
      <UseReducer />
      <hr />
      <CustomHookEx />
      <hr />

      {/* 실습 */}
      <PracHook />
      <hr />
      <PracUseCallback />
      <hr />
    </div>
  );
}

export default App;
