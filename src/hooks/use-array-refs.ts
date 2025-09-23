import { useRef } from "react";

function useArrayRefs<T>() {
  const refs = useRef<(T | null)[]>([]);
  const refItem = (index: number) => (el: T | null) => refs.current[index] = el;

  return [refs, refItem] as const;
}

export default useArrayRefs;
