import { useEffect, useState } from "react";

export const useOnScreen = (ref, rootMargin) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (!ref.current) return;

      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isVisible;
};
