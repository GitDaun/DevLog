'use client'

import { useState } from 'react'

import Link from 'next/link'
import AboutMe from '../assets/aboutMe.svg'
import Blog from '../assets/blog.svg'
import Portfolio from '../assets/portfolio.svg'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

interface NavItem {
  icon: any; // SVG 컴포넌트의 정확한 타입을 사용하는 것이 좋습니다
  text: string;
  href: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems: NavItem[] = [
    { icon: AboutMe, text: 'About Me', href: '/' },
    { icon: Blog, text: 'Blog', href: '/blog' },
    { icon: Portfolio, text: 'Portfolio', href: '/' },
  ];

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='border-gray-200 py-[2dvh]'>
      <nav className='' >
      <AnimatePresence>
        <ul 
          className={clsx(`text-3xl  
          sm:font-extralight sm:flex sm:flex-row sm:items-center sm:justify-evenly sm:scale-y-100
        *:hover:text-slate-400 *:flex *:flex-row *:gap-1 *:items-center *:justify-center`,
          {'flex flex-col h-screen w-screen bg-amber-300 absolute top-0 left-0 items-center justify-center gap-10 scale-y-100 transition-transform duration-300 ease-in-out origin-bottom ': isOpen === true, 
          'hidden': isOpen === false
          })}
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
        </ul>
        </AnimatePresence>
        {/* <ul className=' text-2xl hidden sm:font-extralight sm:flex sm:flex-row sm:items-center sm:justify-evenly 
        *:hover:text-slate-400 *:flex *:flex-row *:gap-1 *:items-center *:justify-center'>
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
        </ul> */}
        <div className="flex gap-2 sm:hidden">
          <button 
            aria-label="메뉴 열기" 
            className={
              clsx('menu-button group z-1 scale-150', 
              {'hidden': isOpen === true, 'block': isOpen === false})
            } 
            onClick={handleMenuClick}
          >
            <i className="text-2xl ri-menu-line"></i>
          </button>
          <button 
            aria-label="메뉴 닫기"
            onClick={handleMenuClick}
            className={
              clsx('menu-button group z-1 scale-150', 
              {'hidden': isOpen === false, 'block': isOpen === true})
            }
          >
            <i className="text-2xl ri-close-line"></i>
          </button>
        </div>
        <div className="flex gap-2 sm:hidden">
          <button aria-label="메뉴 열기" className="menu-button group" >
            <i className="text-2xl ri-sun-line"></i>
          </button>
          <button aria-label="메뉴 닫기" className="close-button group" >
           <i className="text-2xl ri-moon-line"></i>
          </button>
        </div>
      </nav>
        {/* <div 
          className={clsx('bg-red-300 h-full w-full absolute top-0 left-0 sm:hidden', 
          {'block': isOpen === true, 'hidden': isOpen === false})}>
        </div> */}
    </header> 
  )
}