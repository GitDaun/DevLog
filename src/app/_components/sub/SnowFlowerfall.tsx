'use client'
import { useState, useEffect } from 'react'

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
        ${isDarkMode ? 'snow' : ''}
      `}
      style={style}
    >
      {isDarkMode ? '❄' : '🌸'}
    </div>
  )
}

const SnowFlowerFall = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // 다크모드 감지 및 파티클 초기화
  useEffect(() => {
    if (!mounted) return
    setParticles([]) // 모드 전환 시 파티클 초기화
  }, [isDarkMode, mounted])

  useEffect(() => {
    if (!mounted) return
    
    // 새로운 파티클(눈/꽃잎)을 생성하는 함수
    const createParticle = () => {
      const particle = {
        id: Math.random(),  // 각 파티클의 고유 식별자
        left: `${Math.random() * 100}%`,  // 화면 가로 위치를 0-100% 사이 무작위 설정
        animationDuration: `${Math.random() * 4 + 6}s`, // 라이트모드(꽃잎): 6-10초 사이 낙하 시간
        swayDuration: `${Math.random() * 3 + 2}s`, // 좌우 흔들림 애니메이션 주기 2-5초
        opacity: Math.random() * 0.8 + 0.2,  // 투명도 0.2-1.0 사이 무작위 설정
        transform: isDarkMode
          ? `scale(${Math.random() * 0.5 + 0.5})`  // 눈: 크기 0.5-1.0배 무작위
          : `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.3 + 0.7})`,  // 꽃잎: 0-360도 회전 + 0.3-1배 크기
      }

      // 최대 50개까지만 파티클 유지 (성능 최적화)
      // 새 파티클은 배열 끝에 추가하고, 50개 초과시 앞에서부터 제거
      setParticles(prev => [...prev.slice(-50), particle])
    }

    // 파티클 생성 주기 설정
    // 다크모드(눈): 200ms마다, 라이트모드(꽃잎): 400ms마다 생성
    const interval = setInterval(createParticle, isDarkMode ? 200 : 400)
    
    // 컴포넌트 언마운트 또는 isDarkMode 변경 시 인터벌 정리
    return () => clearInterval(interval)
  }, [isDarkMode, mounted])

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

export default SnowFlowerFall 