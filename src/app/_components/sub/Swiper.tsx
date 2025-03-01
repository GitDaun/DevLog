import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Virtual } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { swiperData } from '@/assets/index.ts'

const Swiper = () => {
  return (
    <div className="w-full">
      <SwiperComponent
        className="
          [--swiper-navigation-color:theme(colors.black)] dark:[--swiper-navigation-color:theme(colors.white)]
          [--swiper-pagination-color:theme(colors.black)] dark:[--swiper-pagination-color:theme(colors.white)]
          dark:[--swiper-pagination-fraction-color:theme(colors.black)]
          [--swiper-navigation-size:1.25rem] sm:[--swiper-navigation-size:2rem]
          [--swiper-navigation-sides-offset:1px] sm:[--swiper-navigation-sides-offset:5rem]
        "
        spaceBetween={20}
        breakpoints={{
          320: {
            spaceBetween: 20,
          },
          640: {
            spaceBetween: 50,
          }
        }}
        virtual={true}
        pagination={{
          type: 'fraction',
        }}
        navigation={{
          enabled: true,
        }}
        modules={[Pagination, Navigation, Virtual]}
      >
        {swiperData.map((slide, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="relative w-full h-[30rem] md:h-[43.75rem] lg:h-[37rem] 2xl:h-[43.75rem] flex items-center justify-center">
              <Image 
                src={slide.imgPath}
                alt={slide.title}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  )
}

export default Swiper