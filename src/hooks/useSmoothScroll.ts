'use client';

import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    if (typeof window === 'undefined') return;
    
    const element = document.getElementById(id);
    if (!element) return;
    
    const isMobile = window.innerWidth <= 640;
    const headerOffset = isMobile ? 10 : 80;
    
    requestAnimationFrame(() => {
      const elementPosition = element.offsetTop - headerOffset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    });
  }, []);

  return { scrollToElement };
}; 