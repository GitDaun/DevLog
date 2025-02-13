'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // 초기 마운트 시 로컬스토리지에서 테마 확인
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      // 저장된 테마가 없으면 시스템 테마 확인
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(systemTheme ? 'dark' : 'light')
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
    <div className="flex gap-2">
      <button 
        aria-label={theme === 'dark' ? '라이트 모드' : '다크 모드'} 
        className="scale-150 cursor-pointer hover:scale-110"
        onClick={toggleTheme}
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
      </button>
    </div>
  )
}

export default DarkModeToggle