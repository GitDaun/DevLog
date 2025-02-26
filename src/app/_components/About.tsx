'use client'

import Heading from '@/app/_components/sub/Heading'
import Image from 'next/image'
import { aboutText } from '@/assets/index'

const About = () => {
  return (
    <div 
      id="about" 
      data-testid="about-section"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <Heading text={'About Me'} />
      <div className="w-full flex items-center justify-center sm:justify-center sm:gap-x-20">
        <Image
          src={'/myPhoto.webp'}
          alt="About Image"
          width={300}
          height={300}
          className="xl:w-[200px] lg:w-[150px]  hidden lg:block rounded-sm"
        />
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-700 transition-colors">
          <span className="absolute -left-5 top-1/2 -translate-y-1/2 scale-[2.5] text-zinc-100 hidden sm:block dark:text-zinc-700 transition-colors">
            <i className="ri-arrow-left-s-fill"></i>
          </span>
          <p className="text-kor leading-10 font-normal text-gray-700  text-sm lg:text-base  dark:text-white">
            {/* {aboutText} */}
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
