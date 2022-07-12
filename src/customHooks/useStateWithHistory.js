import { useState, useRef, useCallback } from "react";

export const useStateWithHistory = (initialValue, capacity = 10) => {
  const [value, setValue] = useState(initialValue);

  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  const set = useCallback(
    (v) => {
      const resolvedValue = typeof v === "function" ? v(value) : v;

      if (pointerRef.current < historyRef.current.length - 1) {
        historyRef.current.splice(pointerRef.current + 1);
      }

      while (historyRef.current.length >= capacity) {
        historyRef.current.shift();
      }

      historyRef.current.push(resolvedValue);
      pointerRef.current = historyRef.current.length - 1;

      setValue(resolvedValue);
    },
    [value, capacity]
  );

  const back = useCallback(() => {
    if (
      pointerRef.current <= 0 ||
      pointerRef.current > historyRef.current.length - 1
    )
      return;

    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return;

    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const go = useCallback((index) => {
    if (index < 0) {
      pointerRef.current = 0;
      setValue(historyRef.current[0]);

      return;
    }

    if (index >= historyRef.current.length - 1) {
      pointerRef.current = historyRef.current.length - 1;
      setValue(historyRef.current[pointerRef.current]);

      return;
    }

    pointerRef.current = index;
    setValue(historyRef.current[index]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    },
  ];
};
