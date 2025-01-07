'use client'

import Link from 'next/link'
import AboutMe from '../assets/aboutMe.svg'
import Blog from '../assets/blog.svg'
import Portfolio from '../assets/portfolio.svg'
import Contact from '../assets/contact.svg'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className='border-gray-200 py-[4dvh] bg-[#f5f5f5] header'>
      <nav>
        <ul className='font-sour-gummy text-2xl font-[120]  flex flex-row gap-12 justify-center'>

          <motion.div 
            className='flex flex-row gap-1 items-center'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <AboutMe className='size-6'/>
            <li >
            <Link href="/">About Me</Link>
            </li>
          </motion.div>

          <motion.div 
            className='flex flex-row gap-1 items-center'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Blog className='size-6'/>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </motion.div>

          <motion.div 
            className='flex flex-row gap-1 items-center'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Portfolio className='size-6'/>
            <li>
              <Link href="/">Portfolio</Link>
            </li>
          </motion.div>
          
          <motion.div 
            className='flex flex-row gap-1 items-center'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Contact className='size-6'/>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </motion.div>
        </ul>
      </nav>
    </header> 
  )
}