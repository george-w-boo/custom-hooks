import { useState } from "react";
import { useEventListener } from "./useEventListener";

export const useHover = (elRef) => {
  const [isHovered, setIsHovered] = useState();

  useEventListener("mouseover", () => setIsHovered(true), elRef.current);
  useEventListener("mouseout", () => setIsHovered(false), elRef.current);

  return isHovered;
};
