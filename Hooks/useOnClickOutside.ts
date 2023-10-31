import React, { useRef } from "react";

type EventHandler = (event: MouseEvent | TouchEvent) => void;
interface TResponse {
  ref: React.MutableRefObject<HTMLDivElement>;
}

export default function useOnClickOutside(handler: EventHandler): TResponse {
  const ref = useRef<HTMLDivElement>();

  React.useEffect(() => {
    const listener: EventHandler = (event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);

  return { ref };
}
