'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Load = () => {
  const [load, setLoad] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)
  const minLoadTime = 1000 // 최소 로딩 시간 (1초)

  useEffect(() => {
    const startTime = Date.now()

    // 컴포넌트 마운트 후 최소 시간이 지나면 로딩 종료
    const timer = setTimeout(() => {
      const elapsedTime = Date.now() - startTime
      if (elapsedTime < minLoadTime) {
        // 최소 시간까지 대기
        setTimeout(() => {
          setLoad(true)
          // 애니메이션 완료 후 컴포넌트 제거
          setTimeout(() => setShouldRender(false), 500)
        }, minLoadTime - elapsedTime)
      } else {
        setLoad(true)
        // 애니메이션 완료 후 컴포넌트 제거
        setTimeout(() => setShouldRender(false), 500)
      }
    }, 0)

    return () => clearTimeout(timer)
  }, [])

  if (!shouldRender) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: load ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-red-50 z-100"
    >
      <motion.div
        animate={{ 
          x: [-50, 50]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Image 
          src="/waiting.webp" 
          alt="Loading..." 
          width={150} 
          height={150} 
          priority
          unoptimized
        />
      </motion.div>
    </motion.div>
  )
}

export default Load