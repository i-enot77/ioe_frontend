import { useEffect } from "react";

export default function useOutsideClick(
  ref: React.MutableRefObject<HTMLDivElement | HTMLSpanElement | null>,
  isOpen: boolean,
  callback: () => void
) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const condition =
        ref.current && !ref.current.contains(event.target as Node);

      if (condition) {
        callback();
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick, true);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick, true);
    };
  }, [isOpen]);
}
