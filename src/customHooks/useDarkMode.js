import { useEffect } from "react";
import { useLocalStorage } from "../customHooks/useStorage";
import { useMediaQuery } from "./useMediaQuery";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("userDarkMode");
  const preferredDarkMode = useMediaQuery("(prefers-color-scheme: dark");
  const enabled = darkMode ?? preferredDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
};
