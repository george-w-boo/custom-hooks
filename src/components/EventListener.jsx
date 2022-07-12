import { useState } from "react"
import { useEventListener } from "../customHooks/useEventListener";
import Card from "./common/Card";

export default function EventListener() {
  const [key, setKey] = useState("")
  useEventListener("keydown", e => {
    setKey(e.key)
  })

  return <Card legend="useEventListener">Last Key: {key}</Card>
}
