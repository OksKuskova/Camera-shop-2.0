import { isModalOpen } from "../slices/modal-slice";
import { useAppSelector } from "./store.index";

export function useModal() {
  const isOpen = useAppSelector(isModalOpen);

  return {
    isOpen,
  }
}
