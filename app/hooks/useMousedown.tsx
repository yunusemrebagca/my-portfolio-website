import React, { useEffect } from "react";

export const useMousedown = (handler: (e: any) => void) => {
  useEffect(() => {
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
};
