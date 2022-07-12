import { useState, useEffect, useCallback } from "react";

const useStorage = (key, initialValue, storeObject) => {
  const [value, setValue] = useState(() => {
    if (storeObject.getItem(key)) return JSON.parse(storeObject.getItem(key));

    if (typeof initialValue === "function") {
      return initialValue();
    }

    return initialValue;
  });

  useEffect(() => {
    if (value === undefined) {
      storeObject.removeItem(key);
    } else {
      storeObject.setItem(key, JSON.stringify(value));
    }
  }, [key, value, storeObject]);

  const removeValue = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, removeValue];
};

export const useSessionStorage = (key, initialValue) => {
  return useStorage(key, initialValue, window.sessionStorage);
};

export const useLocalStorage = (key, initialValue) => {
  return useStorage(key, initialValue, window.localStorage);
};
