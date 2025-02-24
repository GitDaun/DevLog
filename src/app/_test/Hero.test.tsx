import { render, screen } from "@testing-library/react";
import Hero from "../Hero";


// framer-motion 모킹
vi.mock('framer-motion', () => {
  return vi.importActual<typeof import('framer-motion')>('../__mocks__/framerMotion');
});

// useImageMotion 훅 직접 모킹
vi.mock('../hooks/useImageMotion', () => ({
  useImageMotion: () => ({
    mouseMove: false,
    rotateX: 0,
    rotateY: 0,
    handleMouseMove: vi.fn(),
    handleMouseEnter: vi.fn()
  })
}))

vi.mock('../hooks/useDarkMode', () => ({
  useDarkMode: () => ({ mounted: true, isDarkMode: false })
}))

vi.mock('../_components/SnowFlowerfall', () => ({
  default: () => null
}))

describe('Hero 컴포넌트', () => {
  it('Hero 컴포넌트가 성공적으로 렌더링되어야 함', () => {
    render(<Hero />);
    expect(screen.getByText('Hi')).toBeInTheDocument();
  });

  it('연차 계산 로직 테스트', () => {
      render(<Hero />)
    
    const currentYear = new Date().getFullYear()
    const expectedYears = currentYear - 2022
    
    const yearText = new RegExp(`FE ${expectedYears}년차.*정다운.*입니다`, 'i')
    expect(screen.getByText(yearText)).toBeInTheDocument()
  })

});

