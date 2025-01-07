import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { vi } from 'vitest';
import SvgMock from '../../__mocks__/svgMock'; // 절대 경로 사용

// SVG 모킹 적용
vi.mock('../../assets/aboutMe.svg', 
  () => ({ default: () => <SvgMock /> }));

vi.mock('../../assets/blog.svg', 
  () => ({ default: () => <SvgMock /> }));

vi.mock('../../assets/portfolio.svg', 
  () => ({ default: () => <SvgMock /> }));

vi.mock('../../assets/contact.svg', 
  () => ({ default: () => <SvgMock /> }));


describe('Header', () => {
  it('renders the correct link text',  () => {
    render(<Header />);
    // screen.debug();
    const aboutMeLink =  screen.getByText('About Me');
    expect(aboutMeLink).toBeInTheDocument();
  });
});