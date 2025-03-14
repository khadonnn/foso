import { useLayoutEffect } from "react";

export function useLockBodyScroll(lock: boolean) {
  useLayoutEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (lock) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`; // Bù độ rộng scrollbar
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = ""; // Reset lại
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [lock]);
}
