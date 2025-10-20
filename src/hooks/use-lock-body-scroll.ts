import { useEffect, useRef } from "react";
import { BODY_SCROLL_LOCK } from "../constants/class-name";
import { MODAL_TRANSITION_TIME } from "../components/modal/modal.const";

export function useLockBodyScroll(isOpen: boolean) {
  const originalPaddingRightRef = useRef<string>('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isOpen) {

      return;
    }

    if (!originalPaddingRightRef.current) {
      originalPaddingRightRef.current = document.body.style.paddingRight;
    }

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.classList.add(BODY_SCROLL_LOCK);

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        document.body.classList.remove(BODY_SCROLL_LOCK);
        document.body.style.paddingRight = originalPaddingRightRef.current;
        timeoutRef.current = null;
        originalPaddingRightRef.current = '';
      }, MODAL_TRANSITION_TIME);
    };
  }, [isOpen]);
}
