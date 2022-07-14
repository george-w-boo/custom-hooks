import { useOnlineStatus } from "./../customHooks/useOnlineStatus"
import Card from "./common/Card"

export default function OnlineStatus() {
  const online = useOnlineStatus()

  return <Card legend="useOnlineStatus">{online.toString()}</Card>
}
