import { useState } from "react";
import { useFetch } from "../customHooks/useFetch";
import Card from "./common/Card";

export default function Fetch() {
  const [id, setId] = useState(1);
  const { isLoading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  );

  return (
    <Card legend="useFetch">
      <div>{id}</div>
      <button onClick={() => setId((currentId) => currentId + 1)}>
        Increment ID
      </button>
      <div>Loading: {isLoading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </Card>
  );
}
