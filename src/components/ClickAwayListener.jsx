import { useRef, useState } from "react"
import { useClickAwayListener } from "../customHooks/useClickAwayListener";
import Card from "./common/Card";

export default function ClickAwayListener() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef()

  useClickAwayListener(
    modalRef,
    () => {
      if (open) setOpen(false)
    },
    'openBtn'
  )

  return (
    <Card legend="useClickAwayListener">
      <button id="openBtn" onClick={() => setOpen(true)}>Open</button>
      <div
        ref={modalRef}
        style={{
          display: open ? "block" : "none",
          backgroundColor: "blue",
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      >
        <span>Modal</span>
      </div>
    </Card>
  )
}