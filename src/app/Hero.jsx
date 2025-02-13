'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useMotionValue, useTransform, motion, useSpring } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import FallingEffectComponent from './_components/SnowFlowerfall'

// Snowflake 컴포넌트 추가
const Snowflake = ({ style }) => {
  return (
    <div
      className="snow"
      style={{
        ...style,
        position: 'absolute',
        color: '#fff',
        fontSize: '10px',
        opacity: 0.8,
      }}
    >
      ❄
    </div>
  )
}

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 }) 
  const [mouseMove, setMouseMove] = useState(false)
  const [buttonHover, setButtonHover] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // 눈송이 상태 관리 추가
  const [snowflakes, setSnowflakes] = useState([])
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    x.set(clientX)
    y.set(clientY)
  }

  const handleMouseEnter = () => {
    setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
    setMouseMove(true)
  }

  const { innerWidth, innerHeight } = windowOffset

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 })
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 })

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])

  // mounted 상태 관리
  useEffect(() => {
    setMounted(true)
  }, [])

  // 다크모드 감지 수정
  useEffect(() => {
    if (!mounted) return
    
    setIsDarkMode(theme === 'dark')
  }, [theme, mounted])

  // 눈송이 생성 로직
  useEffect(() => {
    if (!isDarkMode) {
      setSnowflakes([])
      return
    }

    const createSnowflake = () => {
      const snowflake = {
        id: Math.random(),
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        opacity: Math.random() * 0.8 + 0.2, // 투명도 범위 조정
        transform: `scale(${Math.random() * 0.5 + 0.5})`, // 크기 범위 조정
      }

      setSnowflakes(prev => [...prev.slice(-50), snowflake])
    }

    const interval = setInterval(createSnowflake, 200)
    return () => clearInterval(interval)
  }, [isDarkMode])

  if (!mounted) return null

  return (
    <section
      id="home"
      className="h-screen grid place-items-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <FallingEffectComponent />
      
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
            FE 개발자 정다운 입니다
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
