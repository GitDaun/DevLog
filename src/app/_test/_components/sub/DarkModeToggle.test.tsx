import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from '@/app/_components/sub/DarkModeToggle';
import { vi } from 'vitest';
import { useTheme } from 'next-themes';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// next-themes 모킹
vi.mock('next-themes', () => ({
  useTheme: vi.fn(() => ({
    theme: 'light',
    setTheme: vi.fn(),
    resolvedTheme: 'light',
    themes: ['light', 'dark'],
    systemTheme: 'light'
  }))
}));

describe('DarkModeToggle 컴포넌트', () => {
  beforeEach(() => {
    // window.matchMedia 모킹
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // 구버전 지원
        removeListener: vi.fn(), // 구버전 지원
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('matchMedia API를 사용할 수 없는 경우 기본값으로 light를 사용해야 함', () => {
    // matchMedia API 제거
    // @ts-expect-error
    window.matchMedia = undefined;

    render(<DarkModeToggle />);
    
    const themeButton = screen.getByRole('button', { name: '다크 모드' });
    expect(themeButton).toBeInTheDocument();
  });

  it('matchMedia API가 없어도 테마 전환이 작동해야 함', () => {
    // @ts-expect-error
    window.matchMedia = undefined;

    const mockSetTheme = vi.fn();
    vi.mocked(useTheme).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
      resolvedTheme: 'light',
      themes: ['light', 'dark'],
      systemTheme: 'light'
    });

    render(<DarkModeToggle />);
    
    const themeButton = screen.getByRole('button', { name: '다크 모드' });
    fireEvent.click(themeButton);

    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('matchMedia 관련 에러가 발생해도 컴포넌트가 정상 렌더링되어야 함', () => {
    // matchMedia가 에러를 던지도록 설정
    // @ts-expect-error
    window.matchMedia = () => {
      throw new Error('matchMedia not supported');
    };

    const mockSetTheme = vi.fn();
    vi.mocked(useTheme).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
      resolvedTheme: 'light',
      themes: ['light', 'dark'],
      systemTheme: 'light'
    });

    expect(() => {
      render(<DarkModeToggle />);
    }).not.toThrow();

    const themeButton = screen.getByRole('button', { name: '다크 모드' });
    expect(themeButton).toBeInTheDocument();
  });
}); 