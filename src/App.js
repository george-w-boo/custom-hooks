import Toggle from "./components/ToggleValue";
import Timeout from "./components/Timeout";
import UpdateEffect from "./components/UpdateEffect";
import Storage from "./components/Storage";
import LoggerUpdate from "./components/LoggerUpdate";
import Debounce from "./components/Debounce";
import ArrayComponent from "./components/useArray";
import Previous from "./components/Previous";
import StateWithHistory from "./components/StateWithhistory";
import Async from "./components/Async";
import Fetch from "./components/Fetch";
import EventListener from "./components/EventListener";
import OnScreen from "./components/OnScreen";
import WindowSize from "./components/WindowSize";

function App() {
  return (
    <>
      {/* <LoggerUpdate />
      <Storage />
      <Toggle />
      <Timeout />
      <Debounce />
      <UpdateEffect />
      <ArrayComponent />
      <Previous />
      <StateWithHistory />
      <Async />
      <Fetch />
      <EventListener />
      <OnScreen /> */}
      <WindowSize />
    </>
  );
}

export default App;
