import { useEffect } from "react";

export const useClickOutside = (ref, handleOnClickOutside) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current) {
        return;
      }
      handleOnClickOutside(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handleOnClickOutside]);
};
