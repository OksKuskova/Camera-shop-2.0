import { useEffect } from "react"
import { Keys } from "../constants/keyboard-keys.const"

export function useEscKeydown(handler: () => void, active: boolean) {
  useEffect(() => {
    if (!active) return;

    const handleDocumentEscKeydown = (evt: KeyboardEvent) => {
      if (evt.key !== Keys.ESCAPE) return;
      handler();
    }

    document.addEventListener('keydown', handleDocumentEscKeydown);

    return () => {
      document.removeEventListener('keydown', handleDocumentEscKeydown);
    }
  }, [handler]);
};
