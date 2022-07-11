import { useState } from 'react';
import { useTimeout } from '../customHooks/useTimeout';
import Card from './common/Card';

const Timeout = () => {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 5000);

  return (
    <Card legend="useTimeout">
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </Card>
  );
}

export default Timeout;
