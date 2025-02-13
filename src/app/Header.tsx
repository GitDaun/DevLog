'use client'

import { useState, useEffect } from 'react'   
import { motion, AnimatePresence } from 'framer-motion'

import Link from 'next/link'
import AboutMe from '../assets/aboutMe.svg'
import Blog from '../assets/blog.svg'
import Portfolio from '../assets/portfolio.svg'
import clsx from 'clsx'
import DarkModeToggle from './_components/DarkModeToggle'

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
    { icon: Blog, text: 'Blog', href: '/blog' },
    { icon: Portfolio, text: 'Portfolio', href: '/' },
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



  return (
    <header className='p-4 sm:p-4 md:p-8 lg:p-8'>
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
                className={clsx(`
                  text-3xl
                  sm:font-extralight sm:flex sm:flex-row sm:items-center sm:justify-evenly
                  *:hover:text-slate-300 *:flex *:flex-row *:gap-1 *:items-center *:justify-center
                  fixed sm:static top-0 left-0 h-screen w-screen sm:h-auto sm:w-auto
                  bg-slate-100 sm:bg-transparent
                  flex flex-col items-center justify-center gap-10 z-50
                `)}
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
                      <Link href={href}>{text}</Link>
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
            <button 
              aria-label="메뉴 열기" 
              className={clsx('group z-[60] scale-150', 
                {'hidden': isOpen, 'block cursor-pointer hover:transition-transform hover:scale-125': !isOpen}
              )} 
              onClick={handleMenuClick}
            >
              <i className="text-2xl ri-menu-line"></i>
            </button>
            <button 
              aria-label="메뉴 닫기"
              onClick={handleMenuClick}
              className={clsx('group z-[60] scale-150', 
                {'hidden': !isOpen, 'block cursor-pointer hover:transition-transform hover:scale-125': isOpen}
              )}
            >
              <i className="text-2xl ri-close-line"></i>
            </button>
          </div>

          {/* 다크모드 토글 */}
          <DarkModeToggle />
        </div>
      </div>
    </header> 
  )
}