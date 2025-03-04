import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '@/app/_components/Hero';
import { vi } from 'vitest';

// Framer Motion 모킹
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, onClick, ...props }: any) => (
      <div className={className} onClick={onClick}>{children}</div>
    ),
    span: ({ children, className, ...props }: any) => (
      <span className={className}>{children}</span>
    ),
    a: ({ children, className, href, ...props }: any) => (
      <a className={className} href={href}>{children}</a>
    ),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useMotionValue: () => ({
    get: () => 0,
    set: () => {},
  }),
  useTransform: () => ({
    get: () => 0,
    set: () => {},
  }),
}));

// useImageMotion 모킹
vi.mock('@/hooks/useImageMotion', () => ({
  useImageMotion: () => ({
    mouseMove: false,
    rotateX: 0,
    rotateY: 0,
    handleMouseMove: vi.fn(),
    handleMouseEnter: vi.fn(),
  }),
}));

// useDarkMode 모킹
vi.mock('@/hooks/useDarkMode', () => ({
  useDarkMode: () => ({
    mounted: true,
    isDarkMode: false,
  }),
}));

// next/image 모킹
vi.mock('next/image', () => ({
  default: ({ src, alt }: any) => <img src={src} alt={alt} />,
}));

// SnowFlowerfall 컴포넌트 모킹
vi.mock('@/app/_components/sub/SnowFlowerfall', () => ({
  default: ({ isDarkMode }: { isDarkMode: boolean }) => (
    <div data-testid="snow-flower-fall" data-dark-mode={isDarkMode}>
      {isDarkMode ? 'Snow' : 'Flower'} Effect
    </div>
  ),
}));

describe('Hero 컴포넌트', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  it('현재 연차가 올바르게 표시되어야 함', () => {
    const currentYear = new Date().getFullYear();
    const experience = currentYear - 2022;
    expect(screen.getByText(`FE ${experience}년차 개발자 정다운 입니다`)).toBeInTheDocument();
  });

  it('소개 문구가 표시되어야 함', () => {
    expect(screen.getByText('어제보다 나은 오늘을 만들어갑니다.')).toBeInTheDocument();
  });

  it('소셜 링크가 올바르게 렌더링되어야 함', () => {
    const links = [
      { href: 'https://www.linkedin.com/in/%EB%8B%A4%EC%9A%B4-%EC%A0%95-198723245/', label: '링크드인 프로필' },
      { href: 'https://github.com/GitDaun', label: '깃허브 프로필' },
      { href: 'https://daunje0.tistory.com/', label: '블로그 보기' },
    ];

    links.forEach(link => {
      const element = screen.getByLabelText(link.label);
      expect(element).toHaveAttribute('href', link.href);
      expect(element).toHaveAttribute('target', '_blank');
      expect(element).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('Talk to me 버튼이 렌더링되어야 함', () => {
    expect(screen.getByText('Talk to me')).toBeInTheDocument();
  });

  it('SnowFlowerfall 컴포넌트가 렌더링되어야 함', () => {
    expect(screen.getByTestId('snow-flower-fall')).toBeInTheDocument();
  });
});

