import { useEffect, useRef, useState } from "react";

export function useFocusWithin<T extends HTMLElement>() {
  const [isFocused, setIsFocused] = useState(false);
  const refContainer = useRef<T | null>(null);

  const isInside = (node: Node | null) => {
    if (!node) {
      return false;
    }

    if (refContainer.current?.contains(node)) {
      return true;
    }
    return false;
  }

  useEffect(() => {

    const onFocusIn = (evt: FocusEvent) => {
      console.log('работает onFocusIn');
      if (isInside(evt.target as Node)) {
        setIsFocused(true);
      }
    };

    const onFocusOut = (evt: FocusEvent) => {
      console.log('работает onFocusOut');
      if (!isInside(evt.relatedTarget as Node | null)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('focusin', onFocusIn, true);
    document.addEventListener('focusout', onFocusOut, true);

    return () => {
      document.removeEventListener('focusin', onFocusIn, true);
      document.removeEventListener('focusout', onFocusOut, true);
    };
  })

  return { isFocused, setIsFocused, refContainer };
}

export default useFocusWithin;
