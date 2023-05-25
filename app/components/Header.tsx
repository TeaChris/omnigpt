import Image from 'next/image'
import Buttons from './Buttons'

import { FiArrowUpLeft, FiArrowUpRight } from 'react-icons/fi'
import { BsCheck2All } from 'react-icons/bs'

import { useInView } from 'framer-motion'

import img1 from '../assets/headerTop.png'
import img2 from '../assets/headerMiddle.png'
import img3 from '../assets/headerBottom.png'

export default function Header() {
  return (
    <header className="w-full lg:h-[50rem] mt-[7rem]">
      <div className="w-widthSm mx-auto md:w-widthMd md:mx-auto md:h-[50rem] lg:w-widthLg lg:mx-auto flex flex-col-reverse items-center gap-12 py-8 lg:flex lg:flex-row lg:justify-between lg:items-center lg:mt-8">
        {/* left */}
        <div className=" lg:w-[50%] flex flex-col items-start gap-8">
          <div className="w-full flex flex-col items-start gap-2">
            <h2 className="text-2xl md:text-7xl first-letter:capitalize leading-tight lg:text-[4rem] font-inconsolata">
              bring the power of AI to your conversations
            </h2>
            <h6 className="text-2xl font-poppins">
              work faster, smarter, and better together
            </h6>
            <div className="md:w-80 md:mt-3">
              <p className="text-xs font-poppins">
                Experience the power of AI language models with OmniGPT. Our
                chat platform provides seamless communication across multiple
                channels.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3">
            <small className="text-sm font-poppins">
              Try the OmniGPT for free. 15-day trial, no credit card required.
            </small>
            <Buttons
              text="start your free trial"
              className="w-48 h-12 py-2 px-2 bg-colorGreenLight rounded-sm text-sm first-letter:capitalize font-poppins text-white"
            />
          </div>
        </div>

        {/* right */}
        <div className="mt-12 lg:w-[45%] h-full flex flex-col items-center gap-12 pt-16">
          {/* top */}
          <div className="flex items-center gap-4 lg:w-full h-full lg:flex lg:items-center lg:gap-4">
            <div className="w-52 h-20 md:w-96 md:h-28 lg:w-80 lg:h-24 bg-colorYellow rounded-l-full rounded-br-full relative">
              <Image
                src={img1}
                alt="header image 1"
                className="w-full h-32 top-[-2.5rem] left-0 md:w-96 md:h-48 object-contain md:bottom-0 md:right-0 absolute"
              />
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 grid place-items-center bg-colorPurple rounded-full">
              <FiArrowUpLeft style={{ color: '#fff', fontSize: '3rem' }} />
            </div>
          </div>

          {/* middle */}
          <div className="hidden lg:w-full lg:flex lg:items-center lg:gap-4">
            <div className="w-24 h-24 grid place-items-center bg-colorGreenLight rounded-full">
              <FiArrowUpRight style={{ color: '#fff', fontSize: '5rem' }} />
            </div>
            <div className="w-80 h-24 bg-white rounded-l-full rounded-r-full relative">
              <Image src={img2} alt="" className="bottom-0 left-12 absolute" />
            </div>
          </div>
          {/* bottom */}
          <div className="hidden lg:w-full lg:flex lg:flex-col lg:items-center lg:gap-8">
            <div className="w-96 h-20 bg-colorPurple rounded-r-full rounded-tl-full relative">
              <small className="text-xs font-poppins pt-3 right-[2rem] top-1 absolute">
                @OmniGPT Can you give us
                <br /> an update on the latest project
                <br /> status?
              </small>
              <div className="flex items-center gap-8 pb-1 right-[2rem] bottom-0 absolute">
                <small className="text-xs font-poppins">11:45</small>
                <BsCheck2All style={{ color: '#05E283' }} />
              </div>
            </div>
            {/* bottom */}
            <div className="flex items-center gap-4">
              <div className="w-80 h-24 bg-colorGreenLight rounded-l-full rounded-r-full relative">
                <Image
                  src={img3}
                  alt=""
                  className="w-60 h-60 object-cover bottom-0 left-12 absolute"
                />
              </div>
              <div className="w-24 h-24 grid place-items-center bg-colorYellow rounded-r-full rounded-tl-full"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
