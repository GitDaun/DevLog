'use client'
import Heading from './sub/Heading'
import Image from 'next/image'
import { experienceData } from '@/assets/index.ts'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Modal from './sub/Modal'

const Experience = () => {
  const containerRef = useRef(null)
  const [showModal, setShowModal] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 95%', 'end end'],
  })

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 })
  return (
    <div id="experience" className="relative py-20">
      <Heading text={'Experience & Education'} />
      <div
        ref={containerRef}
        className="relative w-full h-full flex flex-col items-center justify-center gap-y-10 sm:gap-y-20 py-10 "
      >
        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`xl:w-[600px] sm:w-[480px] w-full lg:px-12 px-0 relative  ${
              i % 2 === 0
                ? 'xl:-left-[300px] lg:-left-[240px] -left-0'
                : 'xl:left-[300px] lg:left-[240px] left-0'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
              className={`relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 
                tracking-wide text-sm lg:text-base dark:bg-zinc-700 transition-colors z-20 ${
                data.swaper ? 'cursor-pointer hover:scale-105' : ''
              }`}
              onClick={data.swaper ? () => setShowModal(true) : undefined}
            >
              <h1 className="text-lg lg:text-xl font-light text-gray-700 dark:text-white">
                {data.title}
              </h1>
              <div className="text-kor text-gray-800 dark:text-gray-100">
               <span className="block font-light">주요 성과:</span>  
                <ul className="pl-5 pb-5 list-disc marker:text-gray-800 dark:marker:text-gray-200">
                  {data.achievements.map((exp, j) => (
                    <li key={j} className="my-1 font-extralight">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-kor text-gray-800 dark:text-gray-200 transition-colors">
                <span className="font-light">주요 업무:</span>
                <ul className="pl-5 pb-5 list-disc marker:text-gray-800 dark:marker:text-gray-200">
                  {data.works.map((exp, j) => (
                    <li key={j} className="my-1 font-extralight">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
             <div className="text-kor text-gray-800 dark:text-gray-200 transition-colors">
                 <span className="font-light">사용 기술:</span>
                <ul className='flex flex-wrap gap-x-10 justify-start items-center pl-2'>
                  {data.skills.map((skill, j) => (
                    <li key={j} className="my-3 font-extralight relative group">
                      <Image 
                        src={skill} 
                        alt="skill" 
                        width={20} 
                        height={20}
                        className="hover:scale-120 transition-transform "
                      />
                      <span className="tooltip-skill-bottom">
                        {skill.split('/').pop()?.split('_')[0]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className={`absolute top-1/2 text-red-300 -translate-y-1/2 hidden lg:block ${
                  i % 2 === 0 ? 'left-full rotate-180' : 'right-full'
                }`}
              >
                <i className="ri-arrow-left-s-fill"></i>
              </span>
            </motion.div>
            <div
              className={`w-14 absolute top-1/2 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white dark:bg-zinc-700 dark:border-gray-600 ${
                i % 2 === 0
                  ? 'left-1/2 lg:left-full lg:-translate-x-1/2'
                  : 'right-1/2 lg:right-full lg:translate-x-1/2'
              }`}
            >
              {data.year}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute w-1 h-full rounded-full bg-gray-300 origin-top"
        ></motion.div>
      </div>

      <AnimatePresence mode="wait">
        {showModal && (
          <Modal onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Experience
