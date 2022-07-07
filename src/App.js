// import { useState } from "react";
import { useLocaleStorage } from "./customHooks/useLocaleStorage";
import { useLoggerUpdate } from "./customHooks/useLoggerUpdate";
import { useToggle } from "./customHooks/useToggle";
import "./App.css";

function App() {
  const [value, setValue] = useLocaleStorage("name", { name: "initial" });
  const [paragraphState, toggleValue] = useToggle(false);
  useLoggerUpdate("paragraphState", paragraphState);

  const handleValue = () => {
    setValue({ name: Math.random() * 350 });
  };

  return (
    <div className="App">
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
