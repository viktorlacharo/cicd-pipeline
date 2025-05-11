'use client'

import { useEffect, useState } from "react";

const DEFAULT_MOBILE_BREAKPOINT = 1024;

type Sizes = 768 | 1024 | 1280 | 1536;

export function useIsMobile(breakpoint: Sizes = DEFAULT_MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < breakpoint);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return !!isMobile;
}