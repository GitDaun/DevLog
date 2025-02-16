import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import Header from '../Header';
import { mockSetTheme } from '../__mocks__/nextThemes';

// SVG 파일들 모킹
vi.mock('@/assets/aboutMe.svg', () => ({
  default: () => <div data-testid="about-me-icon">AboutMe SVG</div>
}));

vi.mock('@/assets/blog.svg', () => ({
  default: () => <div data-testid="blog-icon">Blog SVG</div>
}));

vi.mock('@/assets/portfolio.svg', () => ({
  default: () => <div data-testid="portfolio-icon">Portfolio SVG</div>
}));

// framer-motion 모킹
vi.mock('framer-motion', () => {
  return vi.importActual<typeof import('framer-motion')>('../__mocks__/framerMotion');
});

// next-themes 모킹
vi.mock('next-themes', () => {
  return vi.importActual<typeof import('next-themes')>('../__mocks__/nextThemes');
});

// localStorage 모킹
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Header 컴포넌트', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
    render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>
    );
  });

  it('네비게이션 링크와 아이콘이 올바르게 렌더링되어야 함', () => {
    // 텍스트 확인
    const links = ['About Me', 'Blog', 'Portfolio'];
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });

    // 아이콘 확인
    const icons = ['about-me-icon', 'blog-icon', 'portfolio-icon'];
    icons.forEach(icon => {
      expect(screen.getByTestId(icon)).toBeInTheDocument();
    });
  });

  it('모바일 메뉴 토글 버튼이 올바르게 작동해야 함', () => {
    // 초기에는 메뉴가 닫혀있음
    const openButton = screen.getByLabelText('메뉴 열기');
    expect(openButton).toBeInTheDocument();
    expect(openButton.classList.contains('hidden')).toBeFalsy();
    
    // 메뉴 열기 버튼 클릭
    fireEvent.click(openButton);
    
    // 메뉴가 열리고 닫기 버튼이 보여야 함
    const closeButton = screen.getByLabelText('메뉴 닫기');
    expect(closeButton).toBeInTheDocument();
    expect(openButton.classList.contains('hidden')).toBeTruthy();
    
    // 메뉴 닫기 버튼 클릭
    fireEvent.click(closeButton);
    
    // 다시 메뉴 열기 버튼이 보여야 함
    expect(openButton.classList.contains('hidden')).toBeFalsy();
    expect(closeButton.classList.contains('hidden')).toBeTruthy();
  });

  it('링크들이 올바른 href를 가지고 있어야 함', () => {
    const aboutLink = screen.getByText('About Me').closest('a');
    const blogLink = screen.getByText('Blog').closest('a');
    const portfolioLink = screen.getByText('Portfolio').closest('a');

    expect(aboutLink).toHaveAttribute('href', '/');
    expect(blogLink).toHaveAttribute('href', '/blog');
    expect(portfolioLink).toHaveAttribute('href', '/');
  });

  it('다크모드 토글 버튼이 존재해야 함', () => {
    const darkModeButton = screen.getByLabelText(/다크 모드|라이트 모드/);
    expect(darkModeButton).toBeInTheDocument();
    
    fireEvent.click(darkModeButton);
    expect(mockSetTheme).toHaveBeenCalled();
  });
  
  it('반응형 디자인에 따라 메뉴가 올바르게 표시되어야 함', () => {
    // 모바일 화면 크기 시뮬레이션
    window.innerWidth = 500;
    fireEvent(window, new Event('resize'));
    
    // 모바일에서는 햄버거 메뉴가 보여야 함
    expect(screen.getByLabelText('메뉴 열기')).toBeVisible();

    // 데스크톱 화면 크기 시뮬레이션
    window.innerWidth = 1024;
    fireEvent(window, new Event('resize'));
    
    // 데스크톱에서는 네비게이션 메뉴가 항상 보여야 함
    const nav = screen.getByRole('navigation');
    expect(nav).toBeVisible();
  });
});

describe('Header 네비게이션 애니메이션', () => {
  beforeEach(() => {
    // 모바일 메뉴를 열어야 motion-ul이 렌더링됨
    render(<Header />);
    const menuButton = screen.getByLabelText('메뉴 열기');
    fireEvent.click(menuButton);
  });

  it('모바일 상태에서 올바른 애니메이션 설정값을 가져야 함', () => {
    // 모바일 환경 설정
    window.innerWidth = 500;
    fireEvent(window, new Event('resize'));
    
    // AnimatePresence 내부의 ul 엘리먼트 찾기
    const motionUl = screen.getByRole('list');
    
    // 애니메이션 속성 테스트
    expect(JSON.parse(motionUl.dataset.initial!)).toEqual({ x: '-100%' });
    expect(JSON.parse(motionUl.dataset.animate!)).toEqual({ x: 0 });
    expect(JSON.parse(motionUl.dataset.transition!)).toEqual({
      type: "spring",
      stiffness: 300,
      damping: 30
    });
  });

  it('데스크톱 상태에서 올바른 애니메이션 설정값을 가져야 함', () => {
    // 데스크톱 환경 설정
    window.innerWidth = 1024;
    fireEvent(window, new Event('resize'));
    
    // AnimatePresence 내부의 ul 엘리먼트 찾기
    const motionUl = screen.getByRole('list');
    
    expect(JSON.parse(motionUl.dataset.initial!)).toEqual({ x: 0 });
    expect(JSON.parse(motionUl.dataset.transition!)).toEqual({
      duration: 0
    });
  });
});