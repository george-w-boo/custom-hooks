import { useCallback, useState } from "react";

export const useStateWithValidation = (validationFunction, initialValue) => {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() =>
    validationFunction(initialValue)
  );

  const onChange = useCallback(
    (nextState) => {
      const resolvedValue =
        typeof nextState === "function" ? nextState(state) : nextState;

      setState(resolvedValue);
      setIsValid(validationFunction(resolvedValue));
    },
    [validationFunction]
  );

  return [state, onChange, isValid];
};
