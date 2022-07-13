import Card from "./common/Card"
import { useWindowSize } from "../customHooks/useWindwoSize";

export default function WindowSize() {
  const { width, height } = useWindowSize()

  return (
    <Card legend="useWindowSize">
      {width} x {height}
    </Card>
  )
}
