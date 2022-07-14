import { useRef } from "react";
import { useLongPress } from "./../customHooks/useLongPress";
import Card from "./common/Card";

export default function LongPress() {
  const elementRef = useRef();
  useLongPress(elementRef, () => alert("Long Press"));

  return (
    <Card legend="useLongPress">
      <div
        ref={elementRef}
        style={{
          backgroundColor: "red",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      />
    </Card>
  );
}
