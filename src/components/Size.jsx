import { useRef } from "react"
import Card from "./common/Card"
import { useSize } from "../customHooks/useSize"

export default function Size() {
  const ref = useRef()
  const size = useSize(ref);

  return (
    <Card legend="useSize">
      <div>{JSON.stringify(size)}</div>
      <textarea ref={ref}></textarea>
    </Card>
  )
}
