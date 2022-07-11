import { useState } from "react";
import { useTimeout } from "./customHooks/useTimeout";
import { useLocaleStorage } from "./customHooks/useLocaleStorage";
import { useLoggerUpdate } from "./customHooks/useLoggerUpdate";
import { useToggle } from "./customHooks/useToggle";
import "./App.css";
import { useDebounce } from "./customHooks/useDebounce";

function App() {
  const [count, setCount] = useState(10);
  // const { clear, reset } = useTimeout(() => setCount(0), 5000);
  const [value, setValue] = useLocaleStorage("name", { name: "initial" });
  const [paragraphState, toggleValue] = useToggle(false);
  // useLoggerUpdate("paragraphState", paragraphState);
  // useDebounce(() => alert(count), 2000, [count]);
  useDebounce(() => alert(count), 1000, [count]);

  const handleValue = () => {
    setValue({ name: Math.random() * 350 });
  };

  return (
    <div className="App">
      <div>
        <div>{count}</div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        {/* <button onClick={clear}>Clear Timeout</button>
        <button onClick={reset}>Reset Timeout</button> */}
      </div>
      <header className="App-header">
        <button type="button" onClick={() => toggleValue()}>
          Toggle
        </button>
        <button type="button" onClick={() => toggleValue(true)}>
          True
        </button>
        <button type="button" onClick={() => toggleValue(false)}>
          False
        </button>
        <p onClick={handleValue} className={paragraphState ? "" : "false"}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - {value.name}
        </a>
      </header>
    </div>
  );
}

export default App;
