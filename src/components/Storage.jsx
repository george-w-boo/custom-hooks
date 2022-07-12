import { useSessionStorage, useLocalStorage } from "../customHooks/useStorage";
import Card from '../components/common/Card';

export default function Storage() {
  const [name, setName, removeName] = useSessionStorage("name", "Kyle")
  const [age, setAge, removeAge] = useLocalStorage("age", 26)

  return (
    <Card legend="useStorage">
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("John")}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </Card>
  )
}
