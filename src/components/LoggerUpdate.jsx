import { useState } from 'react';
import { useLoggerUpdate } from '../customHooks/useLoggerUpdate';
import Card from './common/Card';

const LoggerUpdate = () => {
  const [valueToLog, setValueToLog] = useState(0);

  useLoggerUpdate(valueToLog);

  return (
    <Card legend="useLoggerUpdate">
      <p onClick={() => setValueToLog(Math.random(34) * 8)}>Updated value: {valueToLog}</p>
    </Card>
  )
}

export default LoggerUpdate;
