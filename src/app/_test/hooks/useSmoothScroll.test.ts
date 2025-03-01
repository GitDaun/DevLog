import { renderHook } from '@testing-library/react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { vi } from 'vitest';

describe('useSmoothScroll 훅', () => {
  beforeEach(() => {
    // window.scrollTo 모킹
    window.scrollTo = vi.fn();
    
    // requestAnimationFrame 모킹
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => {
      cb(0);
      return 0;
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('scrollToElement가 올바르게 동작해야 함', () => {
    const { result } = renderHook(() => useSmoothScroll());
    const mockElement = document.createElement('div');
    mockElement.id = 'test';
    Object.defineProperty(mockElement, 'offsetTop', { value: 500 });
    document.body.appendChild(mockElement);

    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.MouseEvent<HTMLAnchorElement>;

    result.current.scrollToElement(mockEvent, 'test');

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    });

    document.body.removeChild(mockElement);
  });

  it('요소가 없을 경우 스크롤하지 않아야 함', () => {
    const { result } = renderHook(() => useSmoothScroll());
    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.MouseEvent<HTMLAnchorElement>;

    result.current.scrollToElement(mockEvent, 'nonexistent');

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(window.scrollTo).not.toHaveBeenCalled();
  });

  it('모바일 환경에서 올바른 offset을 적용해야 함', () => {
    Object.defineProperty(window, 'innerWidth', { value: 400 });
    const { result } = renderHook(() => useSmoothScroll());
    
    const mockElement = document.createElement('div');
    mockElement.id = 'test';
    Object.defineProperty(mockElement, 'offsetTop', { value: 500 });
    document.body.appendChild(mockElement);

    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.MouseEvent<HTMLAnchorElement>;

    result.current.scrollToElement(mockEvent, 'test');

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 490, // 500 - 10 (mobile offset)
      behavior: 'smooth',
    });

    document.body.removeChild(mockElement);
  });
}); 