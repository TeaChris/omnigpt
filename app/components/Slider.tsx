'use client'

import Image from 'next/image'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { BsStarFill } from 'react-icons/bs'

import { testimonials, Testimonial } from '@/data'

export default function Slider() {
  return (
    <section className="w-full h-fit lg:h-[32rem] py-3">
      <div className="w-wsm mx-auto h-fit md:w-wmd lg:w-wlg flex flex-col items-start gap-8 relative overflow-hidden">
        <div className="w-full lg:w-[26rem]">
          <h2 className="text-5xl text-inconsolata">
            See What People
            <span className="text-colorGreenLight"> Are Saying About Us</span>
          </h2>
        </div>
        <Swiper // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="w-full h-fit"
        >
          {testimonials.map((testimonial: Testimonial) => {
            const { id, title, span, description, image, name } = testimonial
            return (
              <SwiperSlide
                key={id}
                className="w-96 h-fit p-4 rounded-md bg-colorAll "
              >
                <div className="w-full h-fit flex flex-col items-start gap-4">
                  <div className="flex items-center gap-1">
                    <BsStarFill style={{ color: '#FEEA00' }} />
                    <BsStarFill style={{ color: '#FEEA00' }} />
                    <BsStarFill style={{ color: '#FEEA00' }} />
                    <BsStarFill style={{ color: '#FEEA00' }} />
                    <BsStarFill style={{ color: '#FEEA00' }} />
                  </div>

                  <div className="">
                    <h5 className="text-lg font-sans">
                      {title}
                      <br />
                      <span>{span}</span>
                    </h5>
                  </div>

                  <div className="w-full h-36">
                    <p className="text-sm font-sans">{description}</p>
                  </div>

                  <div className="w-fit h-fit flex items-center gap-8">
                    <Image src={image} alt={name} className="" />
                    <h6 className="font-sans">{name}</h6>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
