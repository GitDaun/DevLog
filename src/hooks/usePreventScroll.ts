import { useEffect } from 'react';
// 모바일 메뉴 열릴 때 스크롤 방지
export function usePreventScroll(prevent: boolean) {
  useEffect(() => {
    if (prevent) {
      // 스크롤바 너비 계산
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
      
      // body에 스크롤 방지 클래스 추가
      document.body.classList.add('overflow-hidden');
    }

    return () => {
      // cleanup 함수에서 클래스와 스타일 제거
      document.body.classList.remove('overflow-hidden');
      document.documentElement.style.removeProperty('--scrollbar-width');
    };
  }, [prevent]);
} 