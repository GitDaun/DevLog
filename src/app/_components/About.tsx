'use client'

import Heading from '@/app/_components/sub/Heading'
import Image from 'next/image'
import { aboutText } from '@/assets/index'
import { useState } from 'react'


const About = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div 
      id="about" 
      data-testid="about-section"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <Heading text={'About Me'} />
      <div className="w-full flex items-center justify-center sm:justify-center sm:gap-x-20">
        <div className="hidden xl:block w-[150px] xl:w-[200px] aspect-[4/5] relative">
          <Image
            src={aboutText.myPhoto}
            alt="About Image"
            fill
            sizes="(max-width: 1024px) 150px, 200px"
            priority
            quality={70}
            className={`
              ${isLoading ? 'invisible' : 'visible'}
              object-cover rounded-sm
              transition-opacity duration-300
            `}
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && (
            <div 
              className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-sm"
              aria-hidden="true"
            />
          )}
        </div>
        <div className="relative max-w-[800px] min-h-[200px] rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-700 transition-colors">
          <span className="absolute -left-5 top-1/2 -translate-y-1/2 scale-[2.5] text-zinc-100 hidden sm:block dark:text-zinc-700 transition-colors">
            <i className="ri-arrow-left-s-fill"></i>
          </span>
          <p className="text-kor leading-10 font-normal text-gray-700  text-sm lg:text-base  dark:text-white">
            {aboutText && (
              <>
                {aboutText.introduction}<br/>
                {aboutText.experience}<br/><br/>
                {aboutText.learning}<br/>
                {aboutText.blog}<br/><br/>
                <span className='tracking-wider'>{aboutText.conclusion}</span>
              </>
            )}
          </p>
          <a
            href="/resume.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span className='font-normal'>이력서</ span> <span> Download</span>
            <span className="text-xl">
              <i className="ri-download-line"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About