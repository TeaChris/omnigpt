import Buttons from './Buttons'

export default function Hero() {
  return (
    <section className="w-96 h-96 left-10 bottom-[28rem] md:left-52 lg:w-[50rem] bg-colorGreenLight absolute rounded-lg lg:h-72  lg:bottom-96 lg:left-[20%]">
      <div className="w-full h-full py-8 lg:pt-20 px-4 flex flex-col items-center gap-12 lg:justify-between lg:flex lg:flex-row">
        <div className="w-full lg:w-[65%] h-full">
          <h1 className="text-4xl text-center lg:text-start lg:text-5xl text-black font-inconsolata">
            Join the omnGPT community{' '}
            <span className="text-white">
              and transform the way you collaborate!
            </span>
          </h1>
        </div>

        <div className="w-full lg:w-[25%] grid place-items-center">
          <Buttons
            text="Get Started Now"
            className="w-72 h-16 lg:w-fit lg:h-12 px-3 py-2 bg-black text-white first-letter:capitalize rounded-md font-sans"
          />
        </div>
      </div>
    </section>
  )
}
