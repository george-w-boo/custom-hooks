import { useStateWithValidation } from "../customHooks/useStateWithValidation"
import Card from "./common/Card"

export default function StateWithValidation() {
  const [username, setUsername, isValid] = useStateWithValidation(
    name => name.length > 5,
    ""
  )

  return (
    <Card legend="useStateWithValidation">
      <div>Valid: {isValid.toString()}</div>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
    </Card>
  )
}
