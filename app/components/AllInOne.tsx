import Image from 'next/image'

import col from '../assets/collaboration.png'
import apple from '../assets/apple.png'
import facebook from '../assets/messanger.svg'
import whatsapp from '../assets/WhatsApp.svg'

export default function AllInOne() {
  return (
    <section className="w-full h-fit lg:h-[47rem] mt-8 py-4">
      <div className="w-wsm mx-auto md:w-wmd lg:w-wlg h-full flex flex-col-reverse items-center gap-6 lg:flex lg:flex-row">
        {/* left */}
        <div className="w-full lg:w-1/2 h-fit lg:h-full relative grid place-items-center md:flex md:items-start">
          <Image src={apple} alt="" className="z-10" />
          <div className="w-28 aspect-square rounded-r-full rounded-tl-full bg-colorGreenLight left-0 bottom-20 absolute"></div>
          <div className="w-28 aspect-square rounded-l-full rounded-tr-full bg-colorYellow right-4 lg:right-36 top-20 absolute"></div>
          <div className="w-28 aspect-square grid place-items-center rounded-full bg-white top-4 left-0 lg:-left-2 absolute z-50">
            <Image src={facebook} alt="messenger" className="" />
          </div>
          <div className="w-28 aspect-square grid place-items-center rounded-full bg-white bottom-4 lg:bottom-32 right-0 lg:right-32 absolute z-50">
            <Image src={whatsapp} alt="whatsapp" className="" />
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2 h-fit py-2 lg:py-0 flex flex-col items-start gap-4">
          <h2 className="text-5xl lg:text-6xl font-inconsolata">
            The{' '}
            <span className="text-colorGreenLight">All-in-One Solution</span>{' '}
            for Conversational AI
          </h2>
          <div className="w-full lg:w-[70%] h-fit p-3 bg-white rounded-md">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2 items-start">
                <h6 className="text-black text-sm font-bold font-sans">
                  Seamless Collaboration
                </h6>
                <p className="text-xs text-poppins text-black">
                  You can easily collaborate with friends and colleagues on
                  projects, whether it`s for work or personal use.
                </p>
              </div>
              {/* green box */}
              <div className=" w-20 aspect-square lg:w-28 h-20 grid place-items-center rounded-md bg-colorGreenLight">
                <Image src={col} alt="collaboration" className="" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-full lg:w-[70%] flex flex-col items-center gap-3">
            <div className="w-full h-fit pl-4 py-2 lg:py-3 bg-colorAll rounded-md">
              <span className="font-sans text-lg">Multi-Channel Support</span>
            </div>
            <div className="w-full h-fit pl-4 py-2 lg:py-3 bg-colorAll rounded-md">
              <span className="font-sans text-lg">AI-Powered Assistance</span>
            </div>
            <div className="w-full h-fit pl-4 py-2 lg:py-3 bg-colorAll rounded-md">
              <span className="font-sans text-lg">Easy to Use</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
