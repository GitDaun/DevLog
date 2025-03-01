import { render, screen, fireEvent, act } from '@testing-library/react';
import DarkModeToggle from '../../_components/sub/DarkModeToggle';
import { vi } from 'vitest';

// next-themes 모킹
const mockSetTheme = vi.fn();
vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: mockSetTheme,
  }),
}));

// Framer Motion 모킹
vi.mock('framer-motion', () => ({
  motion: {
    button: ({ children, onClick, ...props }: any) => (
      <button onClick={onClick}>{children}</button>
    ),
    i: ({ children, className }: any) => (
      <i className={className}>{children}</i>
    ),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('DarkModeToggle 컴포넌트', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('초기 마운트 시 로컬스토리지의 테마를 사용해야 함', () => {
    localStorage.setItem('theme', 'dark');
    render(<DarkModeToggle />);
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('로컬스토리지에 테마가 없을 경우 시스템 테마를 사용해야 함', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn().mockImplementation(query => ({
        matches: true,
        media: query,
      })),
    });

    render(<DarkModeToggle />);
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('토글 버튼 클릭 시 테마가 변경되어야 함', () => {
    render(<DarkModeToggle />);
    const button = screen.getByRole('button');
    
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('matchMedia API를 사용할 수 없는 경우 기본값으로 light를 사용해야 함', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: vi.fn().mockImplementation(() => {
        throw new Error('matchMedia not supported');
      }),
    });

    render(<DarkModeToggle />);
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });
}); 