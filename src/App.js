import { useLocaleStorage } from "./customHooks/useLocaleStorage";
import { useLoggerUpdate } from "./customHooks/useLoggerUpdate";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [value, setValue] = useLocaleStorage("name", { name: "initial" });
  useLoggerUpdate("name from localeStorage", value.name);

  const handleValue = () => {
    setValue({ name: Math.random() * 350 });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handleValue}>
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
