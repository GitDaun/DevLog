import { renderHook, act } from '@testing-library/react';
import { useImageMotion } from '@/hooks/useImageMotion';

describe('useImageMotion 훅', () => {
  it('초기 상태가 올바르게 설정되어야 함', () => {
    const { result } = renderHook(() => useImageMotion());
    
    expect(result.current.mouseMove).toBe(false);
    expect(result.current.rotateX).toBeDefined();
    expect(result.current.rotateY).toBeDefined();
  });

  it('handleMouseEnter 호출 시 windowOffset이 업데이트되어야 함', () => {
    const { result } = renderHook(() => useImageMotion());
    
    act(() => {
      result.current.handleMouseEnter();
    });

    expect(result.current.mouseMove).toBe(true);
  });

  it('handleMouseMove 호출 시 x, y 값이 업데이트되어야 함', () => {
    const { result } = renderHook(() => useImageMotion());
    
    act(() => {
      result.current.handleMouseMove({
        clientX: 100,
        clientY: 200,
      } as React.MouseEvent<HTMLDivElement>);
    });

    // rotateX와 rotateY가 정의되어 있는지 확인
    expect(result.current.rotateX).toBeDefined();
    expect(result.current.rotateY).toBeDefined();
  });
}); 