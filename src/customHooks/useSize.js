import { useState, useEffect } from "react";

export const useSize = (elementRef) => {
  const [size, setSize] = useState({});

  useEffect(() => {
    console.log(elementRef.current);
    if (!elementRef.current) return;

    const observer = new ResizeObserver(([entry]) =>
      setSize(entry.contentRect)
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  return size;
};
