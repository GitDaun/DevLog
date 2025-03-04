import { render, screen } from '@testing-library/react';
import Skills from '../../_components/Skills';
import { skillsData } from '@/assets/index.ts';
import { vi } from 'vitest';

// Framer Motion 모킹
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }: any) => (
      <div className={className}>{children}</div>
    ),
  },
}));

// Heading 컴포넌트 모킹
vi.mock('../_components/sub/Heading', () => ({
  default: ({ text }: { text: string }) => <h1>{text}</h1>,
}));

// Next/Image 모킹
vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className }: any) => (
    <img
      src={src}
      alt={alt}
      className={className}
      data-original-src={src} // 원본 src를 data 속성으로 저장
    />
  ),
}));

describe('Skills 컴포넌트', () => {
  beforeEach(() => {
    render(<Skills />);
  });

  it('Skills 헤딩이 렌더링되어야 함', () => {
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('모든 스킬 아이템이 렌더링되어야 함', () => {
    skillsData.forEach(item => {
      const icon = screen.getByAltText(`${item.name} icon`);
      expect(icon).toBeInTheDocument();
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it('각 스킬 아이템이 올바른 이미지 속성을 가져야 함', () => {
    skillsData.forEach(item => {
      const icon = screen.getByAltText(`${item.name} icon`);
      // 원본 src 값을 data-original-src 속성에서 확인
      expect(icon).toHaveAttribute('data-original-src', item.icon);
      // className 확인
      expect(icon).toHaveClass('h-auto');
      expect(icon.className).toMatch(/w-\[30px\]/);
    });
  });
}); 