'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

interface Particle {
  id: number;
  left: string;
  animationDuration: string;
  swayDuration: string;
  opacity: number;
  transform: string;
}

const Particle = ({ style, isDarkMode }: { style: React.CSSProperties; isDarkMode: boolean }) => {
  return (
    <div
      className={`
        absolute text-xs opacity-80 pointer-events-none z-10
        ${isDarkMode ? 'text-white' : ''}
      `}
      style={style}
    >
      {isDarkMode ? '❄' : '🌸'}
    </div>
  )
}

const Snowfall = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 다크모드 감지 및 파티클 초기화
  useEffect(() => {
    if (!mounted) return
    setIsDarkMode(theme === 'dark')
    setParticles([]) // 모드 전환 시 파티클 초기화
  }, [theme, mounted])

  useEffect(() => {
    const createParticle = () => {
      const particle = {
        id: Math.random(),
        left: `${Math.random() * 100}%`,
        animationDuration: isDarkMode 
          ? `${Math.random() * 3 + 2}s`  // 눈송이: 2-5초
          : `${Math.random() * 4 + 6}s`, // 꽃잎: 6-10초
        swayDuration: `${Math.random() * 3 + 2}s`, // 좌우 흔들림: 2-5초
        opacity: Math.random() * 0.8 + 0.2,
        transform: isDarkMode
          ? `scale(${Math.random() * 0.5 + 0.5})`
          : `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.3 + 0.3})`,
      }

      setParticles(prev => [...prev.slice(-50), particle])
    }

    const interval = setInterval(createParticle, isDarkMode ? 200 : 400)
    return () => clearInterval(interval)
  }, [isDarkMode])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <Particle
          key={particle.id}
          isDarkMode={isDarkMode}
          style={{
            left: particle.left,
            animationName: isDarkMode ? 'fall' : 'fall, sway',
            animationDuration: isDarkMode 
              ? particle.animationDuration
              : `${particle.animationDuration}, ${particle.swayDuration}`,
            animationTimingFunction: isDarkMode 
              ? 'linear' 
              : 'linear, ease-in-out',
            animationIterationCount: isDarkMode 
              ? 'infinite' 
              : 'infinite, infinite',
            animationDirection: isDarkMode 
              ? 'normal' 
              : 'normal, alternate',
            transform: particle.transform,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default Snowfall 