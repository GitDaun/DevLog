'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Load = () => {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setLoad(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ 
        opacity: load ? 0 : 1,
        y: load ? '-100%' : 0 
      }}
      transition={{ 
        duration: 0.8,
        ease: "easeInOut"
      }}
      className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-gradient-to-t from-yellow-50 to-red-50 z-50"
    >
      <Image 
        src="/waiting.webp" 
        alt="Spinner Gif" 
        width={150} 
        height={150} 
        priority
      />
    </motion.div>
  )
}

export default Load
