'use client'
import Heading from './_components/sub/Heading'
import Image from 'next/image'
import { skillsData } from '@/assets/index.ts'
import { motion } from 'framer-motion'

const Skills = () => {
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  }
  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center gap-y-10 sm:gap-y-20">
      <Heading text={'Skills'} />
      <div className="w-full grid grid-cols-2 gap-4 px-4 
        sm:grid-cols-3 sm:gap-6 
        md:grid-cols-4 md:gap-8 
        lg:flex lg:flex-wrap lg:justify-between lg:gap-x-8 lg:gap-y-6 lg:px-0">
        {skillsData.map((item, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: '50px', once: true }}
            key={i}
            className="flex items-center justify-center gap-x-2 rounded-xl border border-red-300
              bg-zinc-200 px-3 py-2 
              sm:px-4 
              lg:px-5"
          >
            <Image
              src={item.icon}
              alt={`${item.name} icon`}
              width={100}
              height={100}
              className="h-auto w-[30px] sm:w-[35px] lg:w-[40px]"
            />
            <p className="text-xs sm:text-sm text-gray-600">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
