'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import AboutMe from '../assets/aboutMe.svg'
import Blog from '../assets/blog.svg'
import Portfolio from '../assets/portfolio.svg'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

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
    <header className='p-4 sm:p-8 md:p-12 lg:p-16 grid gap-y-6 sm:grid-rows-[min-content_1fr]'>
      <nav className='relative' >
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

        <div className="flex gap-2 sm:hidden">
          <button 
            aria-label="메뉴 열기" 
            className={clsx('menu-button group z-[60] scale-150', 
              {'hidden': isOpen, 'block cursor-pointer hover:transition-transform hover:scale-125': !isOpen}
            )} 
            onClick={handleMenuClick}
          >
            <i className="text-2xl ri-menu-line"></i>
          </button>
          <button 
            aria-label="메뉴 닫기"
            onClick={handleMenuClick}
            className={clsx('menu-button group z-[60] scale-150', 
              {'hidden': !isOpen, 'block cursor-pointer hover:transition-transform hover:scale-125': isOpen}
            )}
          >
            <i className="text-2xl ri-close-line"></i>
          </button>
        </div>

        <div className="flex gap-2">
          <button aria-label="라이트 모드" className="menu-button cursor-pointer" >
            <i className="text-2xl ri-sun-line"></i>
          </button>
          <button aria-label="다크 모드" className="close-button cursor-pointer" >
           <i className="text-2xl ri-moon-line"></i>
          </button>
        </div>
      </nav>
    </header> 
  )
}