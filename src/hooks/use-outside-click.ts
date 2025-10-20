import { RefObject, useEffect } from "react";

function useOutsideClick<T extends HTMLElement>(ref: RefObject<T>, onOutside: () => void, active: boolean) {
  useEffect(() => {
    if (!active) return;

    const handlePointerDown = (evt: PointerEvent) => {
      console.log('работает handlePointerDown');
      if (!ref.current?.contains(evt.target as Node)) {
        onOutside();
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);

    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [ref, onOutside, active])
}

export default useOutsideClick;
