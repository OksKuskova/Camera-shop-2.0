import { useEffect, useRef } from "react";
import { Keys } from "../constants/keyboard-keys.const";

export function useFocusOnModal(isOpen: boolean) {
  const refs = useRef<(HTMLElement | null)[]>([]);

  const addFocusableRef = (el: HTMLElement | null) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  }

  useEffect(() => {
    const elements = refs.current;

    if (!isOpen || elements.length === 0) return;

    const first = elements[0];
    const last = elements[elements.length - 1];

    first?.focus();

    const handleTabKeydown = (evt: KeyboardEvent) => {
      if (evt.key !== Keys.TAB) return;

      if (evt.shiftKey && document.activeElement === first) {
        evt.preventDefault();
        last?.focus();
      } else if (!evt.shiftKey && document.activeElement === last) {
        evt.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener('keydown', handleTabKeydown);

    return () => {
      document.removeEventListener('keydown', handleTabKeydown);
      refs.current = [];
    }
  }, [isOpen]);

  return addFocusableRef;
}
