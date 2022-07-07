import { useEffect } from "react";

export const useLoggerUpdate = (variable, value) => {
  useEffect(() => {
    console.log(variable, ":", value);
  }, [value, variable]);
};
