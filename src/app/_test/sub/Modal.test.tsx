import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../../_components/sub/Modal';

// Swiper 모킹
vi.mock('../_components/sub/Swiper', () => ({
  default: () => <div data-testid="swiper-container">Swiper Mock</div>
}));

// Framer Motion 모킹
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Dialog showModal 모킹
HTMLDialogElement.prototype.showModal = vi.fn();
HTMLDialogElement.prototype.close = vi.fn();

describe('Modal 컴포넌트', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    render(<Modal onClose={mockOnClose} />);
  });

  it('모달이 올바르게 렌더링되어야 함', () => {
    const dialog = screen.getByTestId('modal-dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveClass('fixed', 'inset-0', 'bg-transparent');
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });

  it('닫기 버튼이 올바르게 렌더링되어야 함', () => {
    const closeButton = screen.getByLabelText('Close modal');
    expect(closeButton).toBeInTheDocument();
    expect(closeButton.querySelector('.ri-close-line')).toBeInTheDocument();
  });

  it('닫기 버튼 클릭시 onClose가 호출되어야 함', () => {
    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('배경 클릭시 onClose가 호출되어야 함', () => {
    const backdrop = screen.getByTestId('modal-backdrop');
    fireEvent.click(backdrop);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('ESC 키 입력시 onClose가 호출되어야 함', () => {
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('Swiper 컴포넌트가 렌더링되어야 함', () => {
    const swiperContainer = screen.getByTestId('swiper-container');
    expect(swiperContainer).toBeInTheDocument();
  });
});