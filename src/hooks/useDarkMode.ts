import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export const useDarkMode = () => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    setIsDarkMode(theme === 'dark')
  }, [theme, mounted])

  return {
    mounted,
    isDarkMode
  }
} 