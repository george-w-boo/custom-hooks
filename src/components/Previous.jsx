import { useState } from "react"
import { usePrevious } from "../customHooks/usePrevious";
import Card from "./common/Card";

export default function Previous() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Kyle")
  const previousCount = usePrevious(count)

  return (
    <Card legend="usePrevious">
      <div>
        Current: {count} - Previous: {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName("John")}>Change Name</button>
    </Card>
  )
}
