import { useCallback, useState } from "react";
import Cookie from "js-cookie";

export const useCookie = (name, initialValue) => {
  const [value, setValue] = useState(() => {
    const existingValue = Cookie.get(name);

    if (existingValue) return existingValue;

    return initialValue;
  });

  const update = useCallback(
    (newValue, options) => {
      Cookie.set(name, newValue, options);
      setValue(newValue);
    },
    [name]
  );

  const remove = useCallback(() => {
    Cookie.remove(name);
    setValue(null);
  }, [name]);

  return [value, update, remove];
};
