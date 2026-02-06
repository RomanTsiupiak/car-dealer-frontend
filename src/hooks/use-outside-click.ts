import { RefObject, useEffect } from "react";

type UseOutsideClickProps = {
  ref: RefObject<HTMLDivElement | null>;
  action: () => void;
};

export const useOutsideClick = ({ ref, action }: UseOutsideClickProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (ref.current && !ref.current.contains(target)) {
        action();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
