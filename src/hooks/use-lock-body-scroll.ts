import { useEffect } from "react";
import { BODY_SCROLL_LOCK } from "../constants/class-name";

export function useLockBodyScroll(isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalePaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.classList.add(BODY_SCROLL_LOCK);

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.classList.remove(BODY_SCROLL_LOCK);
      document.body.style.paddingRight = `${originalePaddingRight}px`;
    }
  }, [isOpen]);
}
