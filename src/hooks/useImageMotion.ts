import { useState } from 'react'
import { useMotionValue, useTransform, useSpring } from 'framer-motion'

export const useImageMotion = () => {
  const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 })
  const [mouseMove, setMouseMove] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    x.set(clientX)
    y.set(clientY)
  }
  
  const handleMouseEnter = () => {
    setWindowOffset({ 
      innerWidth: window.innerWidth, 
      innerHeight: window.innerHeight 
    })
    setMouseMove(true)
  }
  
  const { innerWidth, innerHeight } = windowOffset
  
  const xSpring = useSpring(x, { stiffness: 100, damping: 10 })
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 })
  
  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])

  return {
    mouseMove,
    rotateX,
    rotateY,
    handleMouseMove,
    handleMouseEnter
  }
} 