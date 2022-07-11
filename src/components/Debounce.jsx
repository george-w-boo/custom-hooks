import { useState } from "react"
import { useDebounce } from "../customHooks/useDebounce";
import Card from "./common/Card";

const Debounce = () => {
  const [count, setCount] = useState(10)
  useDebounce(() => alert(count), 2000, [count])

  return (
    <Card legend="useDebounce">
      <div>useDebounce: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </Card>
  )
}

export default Debounce;
