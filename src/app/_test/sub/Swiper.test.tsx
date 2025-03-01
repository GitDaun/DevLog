import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Swiper from '../../_components/sub/Swiper'
import { swiperData } from '@/assets/index.ts'

// Swiper 관련 모듈 모킹
vi.mock('swiper/react', () => ({
  Swiper: ({ children, className }: any) => (
    <div className={className} data-testid="swiper-container">
      {children}
    </div>
  ),
  SwiperSlide: ({ children }: any) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}))

// Next/Image 모킹
vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className }: any) => (
    <img
      src={src}
      alt={alt}
      className={className}
      data-original-src={src}
    />
  ),
}))

// Swiper 모듈을 모킹
vi.mock('swiper/modules', () => ({
  Pagination: vi.fn(),
  Navigation: vi.fn(),
  Virtual: vi.fn(),
}))

// CSS 모듈을 모킹
vi.mock('swiper/css', () => ({}))
vi.mock('swiper/css/navigation', () => ({}))
vi.mock('swiper/css/pagination', () => ({}))

describe('Swiper 컴포넌트', () => {
  it('Swiper 컴포넌트가 정상적으로 렌더링되어야 합니다', () => {
    render(<Swiper />)
    expect(screen.getByTestId('swiper-container')).toBeInTheDocument()
  })

  it('모든 슬라이드가 렌더링되어야 합니다', () => {
    render(<Swiper />)
    const slides = screen.getAllByTestId('swiper-slide')
    expect(slides).toHaveLength(swiperData.length)
  })

  it('각 슬라이드에 이미지가 올바르게 렌더링되어야 합니다', () => {
    render(<Swiper />)
    swiperData.forEach((slide) => {
      const image = screen.getByAltText(slide.title)
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('data-original-src', slide.imgPath)
    })
  })

  it('Swiper 컨테이너에 올바른 클래스가 적용되어야 합니다', () => {
    render(<Swiper />)
    const container = screen.getByTestId('swiper-container')
    expect(container.className).toContain('[--swiper-navigation-color:theme(colors.black)]')
    expect(container.className).toContain('dark:[--swiper-navigation-color:theme(colors.white)]')
  })
}) 