import { useEffect } from "react";
import { useTimeout } from "../customHooks/useTimeout";
import { useEventListener } from "../customHooks/useEventListener";

export const useLongPress = (elRef, cb, delay = 300) => {
  const { clear, reset } = useTimeout(cb, delay);

  useEffect(() => clear(), []);

  useEventListener("mousedown", reset, elRef.current);
  useEventListener("touchstart", reset, elRef.current);

  useEventListener("mouseup", clear, elRef.current);
  useEventListener("mouseleave", clear, elRef.current);
  useEventListener("touchend", clear, elRef.current);
};
