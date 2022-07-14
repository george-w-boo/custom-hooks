import { useRef } from "react"
import {useHover} from "./../customHooks/useHover"
import Card from "./common/Card"

export default function Hover() {
  const elementRef = useRef()
  const hovered = useHover(elementRef)

  return (
    <Card legend="useHover">
      <div
        ref={elementRef}
        style={{
          backgroundColor: hovered ? "blue" : "red",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      />
    </Card>
  )
}
