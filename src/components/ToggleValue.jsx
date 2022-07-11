import { useToggle } from '../customHooks/useToggle';
import Card from './common/Card';

const Toggle = () => {
  const [paragraphState, toggleValue] = useToggle(false);

  return (
    <Card legend="useToggle">
      <button type="button" onClick={() => toggleValue()}>
        Toggle
      </button>
      <button type="button" onClick={() => toggleValue(true)}>
        True
      </button>
      <button type="button" onClick={() => toggleValue(false)}>
        False
      </button>
      <p className={paragraphState ? "" : "false"}>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </Card>
  );
}

export default Toggle;
