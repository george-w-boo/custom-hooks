import { useState } from "react";

export const useArray = (initialArray) => {
  const [currentArray, setCurrentArray] = useState(initialArray);

  const push = (item) => {
    setCurrentArray([...currentArray, item]);
  };

  const update = (position, item) => {
    const currentArrayCopy = [...currentArray];
    currentArrayCopy.splice(position, 1, item);
    setCurrentArray(currentArrayCopy);
  };

  return {
    currentArray,
    push,
    update,
  };
};
