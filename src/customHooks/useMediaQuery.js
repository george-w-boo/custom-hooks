import { useEffect, useState } from "react";
import { useEventListener } from "../customHooks/useEventListener";

export const useMediaQuery = (query) => {
  const [matchesQuery, setMatchesQuery] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);

  useEffect(() => {
    const list = window.matchMedia(query);
    setMediaQueryList(list);
    setMatchesQuery(list.matches);
  }, [query]);

  useEventListener("change", (e) => setMatchesQuery(e.matches), mediaQueryList);

  return matchesQuery;
};
