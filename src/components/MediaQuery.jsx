import Card from "./common/Card";
import { useMediaQuery } from "../customHooks/useMediaQuery";

export default function MediaQuery() {
  const isLarge = useMediaQuery("(min-width: 600px)")

  return <Card legend="useMediaQuery">Large: {isLarge.toString()}</Card>
}
