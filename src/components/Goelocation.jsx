import { useGeolocation } from "../customHooks/useGeolocation";
import Card from "./common/Card";

export default function GeolocationComponent() {
  const {
    loading,
    error,
    data: { latitude, longitude },
  } = useGeolocation()

  return (
    <Card legend="useLocation">
      <div>Loading: {loading.toString()}</div>
      <div>Error: {error?.message}</div>
      <div>
        {latitude} x {longitude}
      </div>
    </Card>
  )
}
