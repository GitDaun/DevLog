'use client'

import Heading from './_components/sub/Heading'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center">
      <Heading text={'About Me'} />
      <div className="w-full flex items-center justify-center sm:justify-center sm:gap-x-20">
        <Image
          src={'/myPhoto.webp'}
          alt="About Image"
          width={300}
          height={300}
          className="w-[200px] lg:w-[200px] hidden sm:block rounded-sm"
        />
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-700 transition-colors">
          <span className="absolute -left-5 top-1/2 -translate-y-1/2 scale-[2.5] text-zinc-100 hidden sm:block dark:text-zinc-700 transition-colors">
            <i className="ri-arrow-left-s-fill"></i>
          </span>
          <p className="text-lg text-kor leading-10 font-normal text-gray-700 lg:text-[16px] sm:text-[14px] dark:text-white">
          안녕하세요. Vue.js, JavaScript 기반의 프로젝트를 진행해 온 3년차 프론트엔드 개발자 정다운 입니다.<br/>
          SI 프로젝트 현장 경험을 통해 협업 능력과 이슈 처리 능력을 키웠습니다.<br/><br/>
          이전 경력에서 접하기 어려웠던 React, Next.js, TypeScript 등의 기술 스택을 학습하고 적용하기 위해 개인 프로젝트를 진행하고 있습니다.<br/>
          또한, Medium, ByteByteGo, daily.dev 등 기술 블로그 번역을 통해 꾸준히 새로운 개발 트렌드를 학습하고 있습니다.<br/><br/>
          <span className='tracking-wider'>자영업 경험을 통해 얻은 고객 중심 사고방식과 거시적인 문제 해결 능력을 바탕으로 사용자 경험 개선에 기여하고자 합니다.</span>
          </p>
          <a
            href="/nick-cv.pdf"
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
