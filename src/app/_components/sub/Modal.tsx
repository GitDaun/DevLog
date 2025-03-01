import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Swiper from './Swiper';
import Button from './Button';

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.showModal();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (dialog?.open) {
        dialog.close();
      }
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 bg-transparent p-0 border-none outline-none"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-zinc-800 p-8 rounded-lg w-[90%] max-w-4xl relative max-h-[85vh]"
        >
          <Button 
            variant="close" 
            onClick={onClose}
            aria-label="Close modal"
            className="focus:outline-none"
          >
            <i className="ri-close-line text-2xl"></i>
          </Button>
          <div className="mt-4">
            <Swiper />
          </div>
        </motion.div>
      </motion.div>
    </dialog>
  );
};

export default Modal;