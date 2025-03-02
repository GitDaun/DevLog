'use client'

import { useState, useEffect } from 'react'   
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

import DarkModeToggle from './sub/DarkModeToggle'
import { usePreventScroll } from '@/hooks/usePreventScroll'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { navbarData } from '@/assets/index'

import Button from './sub/Button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const { scrollToElement } = useSmoothScroll();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  // 스크롤 이동과 메뉴 닫기를 함께 처리하는 핸들러
  const handleScrollAndClose = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsOpen(false);
    scrollToElement(e, id);
  };

  usePreventScroll(isOpen && isMobile);

  return (
    <header className="fixed top-0 left-0 w-full pt-8 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 px-4 py-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <nav className='relative flex-grow' >
          <AnimatePresence>
            {(isOpen || !isMobile) && (
              <motion.ul 
                initial={isMobile ? { x: '-100%' } : { x: 0 }}
                animate={{ x: 0 }}
                exit={isMobile ? { x: '-100%' } : { x: 0 }}
                transition={isMobile ? 
                  { type: "spring", stiffness: 300, damping: 30 } : 
                  { duration: 0 }
                }
                className={`
                  text-3xl
                  sm:font-extralight sm:flex sm:flex-row sm:items-center sm:justify-evenly
                  *:flex *:flex-row *:gap-1 *:items-center *:justify-center
                  fixed sm:static top-0 left-0 h-screen w-screen sm:h-auto sm:w-auto
                  bg-slate-100/95 dark:bg-black/95 dark:sm:bg-transparent sm:bg-transparent
                  flex flex-col items-center justify-center gap-10 z-50
                `}
              >
                {navbarData.map((item) => (
                  <motion.div 
                    key={item.id}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <a 
                      href={`/#${item.id}`} 
                      onClick={(e) => handleScrollAndClose(e, item.id)}
                      className="flex flex-row items-center gap-x-2"
                    >
                      <i className={`${item.icon} text-3xl text-yellow-600 leading-none`}></i>
                      <span className={clsx(
                        'text-xl tracking-wide text-center dark:text-white leading-none',
                        'transition-all duration-300',
                        'sm:opacity-0 sm:group-hover:opacity-100 md:opacity-100'
                      )}>
                        {item.name}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>

        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2">
          {/* 모바일 햄버거 메뉴 */}
          <div className="sm:hidden flex gap-2">
            <Button 
              variant="menu"
              aria-label="메뉴 열기"
              isActive={isOpen}
              onClick={handleMenuClick}
            >
              <i className="text-2xl ri-menu-line"></i>
            </Button>
            <Button 
              variant="menu"
              aria-label="메뉴 닫기"
              isActive={!isOpen}
              onClick={handleMenuClick}
              className="close"
            >
              <i className="text-2xl ri-close-line"></i>
            </Button>
          </div>

          {/* 다크모드 토글 */}
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}