'use client';

import { useState, useEffect } from "react";

type Breakpoint = "small" | "medium" | "large" | "xLarge";

const getBreakpoint = (width: number): Breakpoint => {
  if (width >= 2040) return "xLarge";
  if (width >= 1025) return "large";
  if (width >= 820) return "medium";
  return "small";
};

const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("small");

  const isMobile = breakpoint === "small";
  const isTablet = breakpoint === "medium";
  const isDesktop = breakpoint === "large";
  const isXLarge = breakpoint === "xLarge";

  useEffect(() => {
    const handleWindowResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const useBreakpoint = (width: number): Breakpoint => {
    return getBreakpoint(width);
  };

  return {
    breakpoint,
    isMobile,
    isTablet,
    isDesktop,
    isXLarge,
    useBreakpoint
  };
};

export default useResponsive;
