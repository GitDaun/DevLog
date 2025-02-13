'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import FallingEffectComponent from './_components/SnowFlowerfall'
import { useImageMotion } from '../hooks/useImageMotion'
import { useDarkMode } from '../hooks/useDarkMode'

const Hero = () => {
  const year = new Date().getFullYear()
  const [buttonHover, setButtonHover] = useState(false)
  const { mouseMove, rotateX, rotateY, handleMouseMove, handleMouseEnter } = useImageMotion()
  const { mounted, isDarkMode } = useDarkMode()

  if (!mounted) return null

  return (
    <section
      id="home"
      className="h-screen grid place-items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <FallingEffectComponent isDarkMode={isDarkMode} />
      
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: '0.1s',
            }}
          >
            <Image
              src={'/person.png'}
              alt="Person Image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[150px]"
            />
            <motion.span
              className="absolute text-3xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.4 } }}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-2xl font-bold tracking-widest text-zinc-600 sm:text-3xl  dark:text-white ">
             FE {year - 2022}년차 개발자 정다운 입니다
          </h1>
          <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors">
            I like animations 🤗
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl"
        >
  
            <a
              href="https://www.linkedin.com/in/%EB%8B%A4%EC%9A%B4-%EC%A0%95-198723245/"
              className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-line"></i>
            </a>
            <a
              href="https://github.com/GitDaun"
              className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-github-line"></i>
              
            </a>
            <div className="relative group">
              <a
                href="https://daunje0.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
              >
                <i className="ri-edit-2-line"></i>
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 
                             hidden group-hover:block 
                             bg-gray-800 text-white dark:text-gray-800 dark:bg-white text-sm font-normal
                             px-2 py-1 rounded-md whitespace-nowrap
                             after:content-[''] after:absolute after:top-full after:left-1/2
                             after:-translate-x-1/2 after:border-4
                             after:border-transparent after:border-t-gray-800">
                블로그 보기
              </span>
            </div>
      
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
