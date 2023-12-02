import "./App.css";
import ClassRef from "./components/ClassRef";
import FuncRef from "./components/FuncRef";
import ListMap from "./components/ListMap";
import PracMap from "./components/PracMap";
import PracMap2 from "./components/PracMap2";
import PracRef from "./components/PracRef";
import ScrollBox from "./components/ScrollBox";

function App() {
  return (
    <div>
      <ListMap />
      <PracMap />
      <PracMap2 />

      <FuncRef />
      <ClassRef />
      <ScrollBox />
      <PracRef />
    </div>
  );
}

export default App;
