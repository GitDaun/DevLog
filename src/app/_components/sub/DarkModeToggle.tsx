'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // 서버사이드 렌더링 중에는 실행하지 않음
    if (typeof window === 'undefined') return;

    // 초기 마운트 시 로컬스토리지에서 테마 확인
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      try {
        // 저장된 테마가 없으면 시스템 테마 확인
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(systemTheme ? 'dark' : 'light')
      } catch (error) {
        // matchMedia API를 사용할 수 없는 경우 기본값으로 light 설정
        setTheme('light')
      }
    }
    setMounted(true)
  }, [setTheme])

  // 마운트되기 전에는 아무것도 보여주지 않음 (하이드레이션 이슈 방지)
  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="flex gap-2 xl:pr-10 md:pr-5 pr-3">
      <motion.button 
        aria-label={theme === 'dark' ? '라이트 모드' : '다크 모드'} 
        className="scale-150 cursor-pointer"
        onClick={toggleTheme}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <AnimatePresence mode="wait">
          <motion.i
            key={theme}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`text-2xl ${
              theme === 'dark' 
                ? 'ri-sun-line text-amber-300' 
                : 'ri-moon-foggy-fill text-amber-500'
            }`}
          />
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

export default DarkModeToggle