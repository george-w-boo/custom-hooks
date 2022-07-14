import {useCookie} from "./../customHooks/useCookie"
import Card from "./common/Card"

export default function CookieComponent() {
  const [value, update, remove] = useCookie("name", "John")

  return (
    <Card legend="useCookie">
      <div>{value}</div>
      <button onClick={() => update("Sally")}>Change Name To Sally</button>
      <button onClick={remove}>Delete Name</button>
    </Card>
  )
}
