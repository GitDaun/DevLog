import { render, screen } from '@testing-library/react';
import Heading from '../_components/sub/Heading';

describe('Heading 컴포넌트', () => {
  it('전달된 텍스트가 올바르게 렌더링되어야 함', () => {
    const testText = 'Test Heading';
    render(<Heading text={testText} />);
    
    const heading = screen.getByRole('heading', { level: 1, name: testText });
    expect(heading).toBeInTheDocument();
  });

  it('올바른 스타일 클래스가 적용되어야 함', () => {
    render(<Heading text="Test" />);
    
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass(
      'sm:text-3xl',
      'text-2xl',
      'font-bold',
      'text-gray-600',
      'mb-14',
      'self-start',
      'dark:text-white',
      'transition-colors'
    );
  });
}); 