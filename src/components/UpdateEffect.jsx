import { useState } from "react"
import { useUpdateEffect } from "../customHooks/useUpdateEffect";
import Card from "./common/Card";

function UpdateEffect() {
  const [count, setCount] = useState(10)
  useUpdateEffect(() => alert(count), [count])

  return (
    <Card legend="useUpdateEffect">
      <div>Update Effect: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </Card>
  )
}

export default UpdateEffect;
