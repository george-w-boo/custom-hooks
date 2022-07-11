import { useArray } from '../customHooks/useArray';
import Card from './common/Card';

export default function ArrayComponent() {
  const { currentArray, push, update } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  return (
    <Card legend="useArray">
      <div>{currentArray.join(", ")}</div>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
      {/* <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter(n => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button onClick={clear}>Clear</button> */}
    </Card>
  )
}
