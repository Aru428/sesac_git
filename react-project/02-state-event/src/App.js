import "./App.css";
import StateClass from "./components/StateClass";
import StateFunc from "./components/StateFunc";
import PracState from "./components/PracState";
import PracState2 from "./components/PracState2";
import EventClass from "./components/EventClass";
import EventFunc from "./components/EventFunc";
import PracEvent from "./components/PracEvent";
import PracEvent2 from "./components/PracEvent2";
import PracEvent3 from "./components/PracEvent3";
import PracEvent4 from "./components/PracEvent4";

function App() {
  return (
    <div>
      <StateClass name="lily" />
      <StateFunc />
      <PracState />
      <PracState2 />

      <EventClass />
      <EventFunc />
      <PracEvent />
      <PracEvent2 />
      <br />
      <br />
      <PracEvent3 />
      <PracEvent4 />
    </div>
  );
}

export default App;
