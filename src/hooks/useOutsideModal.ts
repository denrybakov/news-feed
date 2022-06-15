import { RefObject, useEffect, useRef, useState } from "react";

type TOutsideModal = RefObject<HTMLDivElement>
interface IOutsideModal {
  ref:  TOutsideModal
}


export function useOutsideModal(onClose: any): IOutsideModal {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    
    const onCloseModal = (e: MouseEvent) => {
      if (e.target instanceof Node && !ref.current?.contains(e.target)) {
        onClose?.()
      }
    }
    document.addEventListener('click', onCloseModal)
    return () => document.removeEventListener('click', onCloseModal)
  }, [])
  return {ref}
}
