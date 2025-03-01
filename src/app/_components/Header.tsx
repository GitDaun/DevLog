'use client'

import { useState, useEffect } from 'react'   
import { motion, AnimatePresence } from 'framer-motion'

import AboutMe from '@/assets/aboutMe.svg'
import Blog from '@/assets/blog.svg'
// import Portfolio from '@/assets/portfolio.svg'
import DarkModeToggle from './sub/DarkModeToggle'
import { usePreventScroll } from '@/hooks/usePreventScroll'
import Button from './sub/Button'

interface NavItem {
  icon: any;
  text: string;
  href: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const navItems: NavItem[] = [
    { icon: AboutMe, text: 'About Me', href: '/' },
    { icon: Blog, text: 'Blog', href: 'https://daunje0.tistory.com/' },
    // { icon: Portfolio, text: 'Portfolio', href: '/' },
  ];

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

  usePreventScroll(isOpen && isMobile);

  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center">
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
                {navItems.map(({ icon: Icon, text, href }) => (
                  <motion.div 
                    key={text}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon className='size-6'/>
                    <li>
                      {/* <Link href={href}>{text}</Link> */}
                      <a href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >{text}</a>
                    </li>
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