import Image from 'next/image'

import img from '../assets/apple.png'
import img2 from '../assets/collaboration.png'

export default function AllInOne() {
  return (
    <section className="w-full lg:h-[45rem] py-8 mt-32 bg-black">
      <div className="w-widthSm mx-auto h-[40rem] flex flex-col-reverse items-center gap-8 md:w-widthMd md:mx-auto lg:w-widthLg lg:mx-auto lg:flex lg:flex-row lg:gap-8 lg:items-center">
        {/* left */}
        <div className="w-[45%] h-full p-4 relative">
          <Image src={img} alt="" className="w-80" />
        </div>

        {/* right */}
        <div className="w-[45%] h-full p-4 flex flex-col items-start gap-5">
          <div className="w-full lg:w-[35rem]">
            <h2 className="text-7xl font-poppins">
              The <span className="text-colorGreenDark">All-in-One</span>{' '}
              Solution for Conversational AI
            </h2>
          </div>

          <div className="w-[27rem] h-32 p-6 bg-white rounded-md flex flex-col items-start justify-between">
            <h6 className="text-lg font-poppins text-black">
              Seamless Collaboration
            </h6>
            <div className="w-full flex flex-col items-center gap-4">
              <div className="w-full h-fit py-1 flex items-center gap-8">
                <div className="w-64">
                  <p className="text-black text-sm font-sans">
                    You can easily collaborate with friends and colleagues on
                    projects, whether it`s for work or personal use.
                  </p>
                </div>
                <div className="w-[4.5rem] h-[4.5rem] grid place-items-center bg-colorGreenDark rounded-md">
                  <Image src={img2} alt="" />
                </div>
              </div>

              {/*  */}
              <div className="w-full flex flex-col items-center gap-3">
                <div className="w-[27rem] h-fit pl-10 py-3 grid place-items-start bg-colorAll rounded-sm md:cursor-pointer hover:scale-95 duration-300 ease-in-out">
                  <h6>Multi-Channel Support</h6>
                </div>
                <div className="w-[27rem] h-fit pl-10 py-3 grid place-items-start bg-colorAll rounded-sm md:cursor-pointer hover:scale-95 duration-300 ease-in-out">
                  <h6>AI-Powered Assistance</h6>
                </div>
                <div className="w-[27rem] h-fit pl-10 py-3 grid place-items-start bg-colorAll rounded-sm md:cursor-pointer hover:scale-95 duration-300 ease-in-out">
                  <h6>Easy to Use</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
