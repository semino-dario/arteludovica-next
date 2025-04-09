"use client";
import { useEffect, useState } from "react";

export  const useMobile = () => {

const [isMobile, setIsMobile ] = useState(false)

useEffect(() => {
    // Check if the screen size matches the mobile breakpoint
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Run the check on mount
    checkMobile();

    // Add a listener for screen size changes
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", checkMobile);

    // Cleanup the listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", checkMobile);
    };
  }, []);

  return isMobile;}