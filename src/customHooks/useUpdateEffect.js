import { useEffect, useRef } from "react";

export const useUpdateEffect = (callback, dependencies) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }

    return callback();
  }, dependencies);
};
