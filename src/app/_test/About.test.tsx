import { render, screen } from '@testing-library/react';
import About from '../About';

// Next/Image 모킹
vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} />
}));

// Heading 컴포넌트 모킹
vi.mock('../_components/sub/Heading', () => ({
  default: ({ text }: { text: string }) => <h1>{text}</h1>
}));

describe('About 컴포넌트', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('About 컴포넌트가 성공적으로 렌더링되어야 함', () => {
    const container = screen.getByTestId('about-section');
    expect(container).toBeInTheDocument();
    expect(About).toBeDefined();
    expect(container).toHaveAttribute('id', 'about');
  });

  it('About Me 제목이 렌더링되어야 함', () => {
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('프로필 이미지가 올바르게 렌더링되어야 함', () => {
    const image = screen.getByAltText('About Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/myPhoto.webp');
  });
});
