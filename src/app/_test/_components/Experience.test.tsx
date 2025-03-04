import { render, screen, fireEvent } from '@testing-library/react';
import Experience from '@/app/_components/Experience';
import { experienceData } from '@/assets/index';
import { vi } from 'vitest';

// Framer Motion 모킹
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, onClick, ...props }: any) => (
      <div className={className} onClick={onClick}>{children}</div>
    ),
  },
  useScroll: () => ({ scrollYProgress: { get: () => 0, set: () => {} } }),
  useSpring: () => ({ get: () => 0, set: () => {} }),
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Heading 컴포넌트 모킹
vi.mock('@/app/_components/sub/Heading', () => ({
  default: ({ text }: { text: string }) => <h1>{text}</h1>
}));

// Modal 컴포넌트 모킹
vi.mock('@/app/_components/sub/Modal', () => ({
  default: ({ onClose }: any) => (
    <>
      <div 
        data-testid="modal-backdrop"
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      <div
        data-testid="modal-content"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      >
        <button 
          onClick={onClose} 
          data-testid="modal-close-button"
        >
          Close
        </button>
      </div>
    </>
  )
}));

describe('Experience 컴포넌트', () => {
  beforeEach(() => {
    render(<Experience />);
  });

  it('제목이 올바르게 렌더링되어야 함', () => {
    expect(screen.getByRole('heading', { name: 'Experience & Education' })).toBeInTheDocument();
  });

  it('swaper가 true인 항목 클릭시 모달이 열려야 함', () => {
    const swaperItem = experienceData.find(data => data.swaper);
    if (!swaperItem) return; // 조기 반환으로 타입 안전성 확보
    
    const cardElement = screen.getByText(swaperItem.title).closest('div');
    expect(cardElement).not.toBeNull();
    fireEvent.click(cardElement!);
    
    expect(screen.getByTestId('modal-backdrop')).toBeInTheDocument();
    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
  });

  it('모달이 열린 상태에서 닫기 버튼 클릭시 모달이 닫혀야 함', () => {
    const swaperItem = experienceData.find(data => data.swaper);
    if (!swaperItem) return;

    // 모달 열기
    const cardElement = screen.getByText(swaperItem.title).closest('div');
    expect(cardElement).not.toBeNull();
    fireEvent.click(cardElement!);

    // 닫기 버튼 클릭
    const closeButton = screen.getByTestId('modal-close-button');
    fireEvent.click(closeButton);

    // 모달이 닫혔는지 확인
    expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument();
  });

  it('모달 backdrop 클릭시 모달이 닫혀야 함', () => {
    const swaperItem = experienceData.find(data => data.swaper);
    if (!swaperItem) return;

    // 모달 열기
    const cardElement = screen.getByText(swaperItem.title).closest('div');
    expect(cardElement).not.toBeNull();
    fireEvent.click(cardElement!);

    // backdrop 클릭
    const backdrop = screen.getByTestId('modal-backdrop');
    fireEvent.click(backdrop);

    // 모달이 닫혔는지 확인
    expect(screen.queryByTestId('modal-backdrop')).not.toBeInTheDocument();
  });
}); 