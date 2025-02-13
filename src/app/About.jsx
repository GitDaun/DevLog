'use client'

import Heading from './_components/sub/Heading'
import Achievements from './_components/sub/Achievements'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center">
      <Heading text={'About Me'} />
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          src={'/about-me.png'}
          alt="About Image"
          width={400}
          height={400}
          className="w-[300px] lg:w-[200px] md:hidden"
        />
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-700 transition-colors">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden dark:text-zinc-700 transition-colors">
            <i className="ri-arrow-left-s-fill"></i>
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px] dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus rerum vero dignissimos asperiores necessitatibus, assumenda itaque aperiam saepe adipisci enim amet, non, vel autem. Ex expedita reiciendis ipsa exercitationem delectus.
          </p>
          <a
            href="/nick-cv.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download CV</span>
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
