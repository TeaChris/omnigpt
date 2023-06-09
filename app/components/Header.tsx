import Image from 'next/image'
import headerTop from '../assets/headerTop.png'
import headerMiddle from '../assets/headerMiddle.png'
import headerBottom from '../assets/headerBottom.png'
import arrow from '../assets/arror.svg'
import element from '../assets/Graphic_Elements.svg'

import { BsCheck2All } from 'react-icons/bs'

import Buttons from './Buttons'

export default function Header() {
  return (
    <header className="w-full h-[45rem] lg:h-[45rem] mt-0 lg:mt-16 py-3">
      <div className="w-wsm mx-auto h-full md:w-wmd lg:w-wlg flex flex-col-reverse items-start gap-8 lg:flex lg:flex-row justify-between pt-56 lg:pt-3">
        {/* left */}
        <div className="w-full lg:w-1/2 h-fit py-3 flex flex-col items-start gap-3">
          <div className="w-full h-fit lg:w-[26rem] flex flex-col items-start gap-1">
            <div className="w-full h-full lg:h-48 relative">
              <h1 className="font-inconsolata font-bold text-[2.7rem] lg:text-6xl">
                Bring the power of AI to your conversations
              </h1>
              <Image
                src={element}
                alt=""
                className="-bottom-4 -left-4 absolute -z-10"
              />
            </div>

            <h6 className="font-sans text-lg">
              Work Faster, Smarter, and Better Together
            </h6>
          </div>
          <p className="text-colorAll font-sans text-sm">
            Experience the power of AI language models with OmniGPT. Our chat
            platform provides seamless communication across multiple channels.
          </p>

          <div className="flex flex-col items-start gap-1 mt-2">
            <span className="text-lg font-sans">
              Try the OmniGPT for free. 15-day trial, no credit card required.
            </span>
            <Buttons
              text="start your free trial"
              className="w-fit px-3 py-2 bg-colorGreenLight text-white first-letter:capitalize rounded-md font-sans"
            />
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2 h-fit lg:h-full lg:mt-16 py-1 flex flex-col items-start gap-8">
          <div className="w-full h-fit flex gap-4">
            <div className="w-60 h-24 md:w-[27rem] md:h-32 lg:w-80 lg:h-28 bg-colorYellow rounded-l-full rounded-br-full relative">
              <Image
                src={headerTop}
                alt=""
                className="bottom-0 left-0 absolute"
              />
            </div>
            <div className="w-28 lg:w-28 aspect-square bg-colorPurple grid place-items-center rounded-full">
              <Image src={arrow} alt="" className="w-12 h-12" />
            </div>
          </div>

          {/* second */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <div className="w-20 lg:w-28 aspect-square bg-colorGreenLight grid place-items-center rounded-full">
              <Image src={arrow} alt="" className="" />
            </div>
            <div className="w-56 h-24 md:w-80 md:h-28 bg-colorWhite rounded-l-full rounded-r-full relative">
              <Image
                src={headerMiddle}
                alt=""
                className="bottom-0 left-16 absolute"
              />
            </div>
          </div>

          {/* third */}
          <div className="w-full hidden lg:flex lg:items-center lg:gap-4">
            <div className="w-full h-28 bg-colorPurple rounded-r-full rounded-tl-full relative">
              <span className="w-48 text-sm text-colorWhite text-start font-poppins top-2 right-20 absolute">
                @OmniGPT Can you give us an update on the latest project status?
              </span>
              <div className="flex items-center gap-1 bottom-8 right-20 absolute">
                <span className="text-xs text-colorAll font-sans">11:41</span>
                <BsCheck2All style={{ color: '#05E283' }} />
              </div>
            </div>
          </div>

          {/* fourth */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <div className="w-56 h-24 md:w-80 md:h-28 bg-colorGreenLight rounded-l-full rounded-r-full relative">
              <Image
                src={headerBottom}
                alt=""
                className="bottom-0 left-0 absolute"
              />
            </div>
            <div className="w-28 aspect-square bg-colorYellow rounded-tl-full rounded-r-full"></div>
          </div>
        </div>
      </div>
    </header>
  )
}
