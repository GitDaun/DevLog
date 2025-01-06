'use client'

import Link from 'next/link'
import AboutMe from '../../public/aboutMe.svg'
import Blog from '../../public/blog.svg'
import Portfolio from '../../public/portfolio.svg'
import Contact from '../../public/contact.svg'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className='border-gray-200 mt-[4dvh]'>
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