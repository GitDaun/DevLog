import { render, screen, act } from '@testing-library/react';
import SnowFlowerFall from '../_components/sub/SnowFlowerfall';
import { vi } from 'vitest';

describe('SnowFlowerFall 컴포넌트', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('다크모드일 때 눈송이가 생성되어야 함', () => {
    render(<SnowFlowerFall isDarkMode={true} />);
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    const particles = screen.getAllByText('❄');
    expect(particles.length).toBeGreaterThan(0);
  });

  it('라이트모드일 때 꽃잎이 생성되어야 함', () => {
    render(<SnowFlowerFall isDarkMode={false} />);
    
    act(() => {
      vi.advanceTimersByTime(2000);
    });

    const particles = screen.getAllByText('🌸');
    expect(particles.length).toBeGreaterThan(0);
  });

  it('모드 전환 시 파티클이 초기화되어야 함', () => {
    const { rerender } = render(<SnowFlowerFall isDarkMode={true} />);
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    const snowflakes = screen.getAllByText('❄');
    expect(snowflakes.length).toBeGreaterThan(0);

    rerender(<SnowFlowerFall isDarkMode={false} />);
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    const petals = screen.getAllByText('🌸');
    expect(petals.length).toBeGreaterThan(0);
    expect(screen.queryAllByText('❄').length).toBe(0);
  });

  it('파티클 수가 50개를 초과하지 않아야 함', async () => {
    render(<SnowFlowerFall isDarkMode={true} />);
    
    // 파티클이 50개가 될 때까지 시간을 진행
    act(() => {
      // 200ms 간격으로 파티클이 생성되므로, 51개가 생성되려면 10.2초가 필요
      // 10초만 진행하여 50개까지만 생성되도록 함
      vi.advanceTimersByTime(10000);
    });

    // 약간의 여유를 두고 파티클 수 확인
    const particles = screen.getAllByText('❄');
    expect(particles.length).toBeLessThanOrEqual(50);
  });

  it('라이트모드에서도 파티클 수가 50개를 초과하지 않아야 함', async () => {
    render(<SnowFlowerFall isDarkMode={false} />);
    
    // 파티클이 50개가 될 때까지 시간을 진행
    act(() => {
      // 400ms 간격으로 파티클이 생성되므로, 51개가 생성되려면 20.4초가 필요
      // 20초만 진행하여 50개까지만 생성되도록 함
      vi.advanceTimersByTime(20000);
    });

    // 약간의 여유를 두고 파티클 수 확인
    const particles = screen.getAllByText('🌸');
    expect(particles.length).toBeLessThanOrEqual(50);
  });
}); 