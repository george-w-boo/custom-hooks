import { useEffect, useRef } from "react";

export const useUpdateEffect = (callback, deps) => {
  const isFirstMount = useRef(true);

  useEffect(() => {
    return () => {
      isFirstMount.current = true;
    };
  }, []);

  useEffect(() => {
    // Do not execute callback for the first time
    if (isFirstMount.current) {
      isFirstMount.current = false;
    } else {
      return callback();
    }
  }, deps);
};
