import { RefObject, useEffect } from "react";

function useOutsideClick<T extends HTMLElement>(ref: RefObject<T>, onOutside: () => void) {

  useEffect(() => {
    const handlePointerDown = (evt: PointerEvent) => {
      console.log('работает handlePointerDown');
      if (!ref.current?.contains(evt.target as Node)) {
        onOutside();
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);

    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [ref, onOutside])
}

export default useOutsideClick;
