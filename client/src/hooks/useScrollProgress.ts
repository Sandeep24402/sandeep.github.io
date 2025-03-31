import { useState, useEffect } from "react";

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      setProgress(scrollPercentage);
    };
    
    window.addEventListener("scroll", updateScrollProgress);
    
    // Initialize progress on mount
    updateScrollProgress();
    
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);
  
  return progress;
}
