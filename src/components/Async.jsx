import { useState } from 'react';
import Card from "./common/Card";
import { useAsync } from "../customHooks/useAsync";

export default function Async() {
  const [toggle, setToggle] = useState(false);
  const { isLoading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error")
      }, 1000)
    })
  }, [toggle])

  return (
    <Card legend="useAsync">
      <div>Loading: {isLoading.toString()}</div>
      <div>{error}</div>
      <div>{value}</div>
      <button onClick={() => setToggle(prev => !prev)}>Toglle state</button>
    </Card>
  )
}
