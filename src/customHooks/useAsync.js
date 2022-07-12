import { useCallback, useEffect, useState } from "react";

export const useAsync = (callback, dependancies = []) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const memoisedCallback = useCallback(() => {
    setIsLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, dependancies);

  useEffect(() => {
    memoisedCallback();
  }, [memoisedCallback]);

  return { isLoading, error, value };
};
