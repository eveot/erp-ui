import { useEffect, useRef } from 'react';

export const useOuterClick = <T>(callback: (e: MouseEvent) => void) => {
  const ref = useRef<T>(null)

  const handleClick = (event: MouseEvent) => {
    if (!(ref.current instanceof HTMLElement)) return;
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback(event);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    }
  }, [ref, callback]);

  return { ref }
}