import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import { AiOutlineSend } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="w-full h-[40rem] lg:h-[37rem] mt-72 bg-black pt-72">
      <div className="w-wsm mx-auto md:w-wmd lg:w-wlg flex flex-col items-start gap-12 lg:gap-20 lg:flex lg:flex-row">
        <div className="w-[20%]">
          <Link href="/" className="flex items-start gap-0">
            <h3 className="text-4xl font-sans font-bold">omnigpt</h3>

            <MdArrowOutward
              style={{ color: '#05E283', fontWeight: '400', fontSize: '2rem' }}
            />
          </Link>
        </div>

        <div className="w-full lg:w-[70%] flex justify-between items-start">
          <div className="flex flex-col gap-3 items-start">
            <h5 className="text-sm lg:text-lg font-sans">Lorem ipsum</h5>
            <h5 className="text-sm lg:text-lg font-sans">Lorem ipsum</h5>
            <h5 className="text-sm lg:text-lg font-sans">Lorem ipsum</h5>
            <h5 className="text-sm lg:text-lg font-sans">Lorem ipsum</h5>
            <h5 className="text-sm lg:text-lg font-sans">Lorem ipsum</h5>
            <h5 className="text-sm lg:text-lg font-sans">Lorem ipsum</h5>
          </div>

          <div className="flex flex-col gap-8 items-start">
            <h3 className="text-lg text-colorGreenLight font-sans tracking-wider capitalize">
              Lorem ipsum dolor
            </h3>
            <div className="flex flex-col gap-3 items-start">
              <h5 className="text-sm lg:text-lg font-sans">Lorem ipsum</h5>
              <h5 className="text-sm lg:text-lg font-sans">Lorem ipsum</h5>
              <h5 className="text-sm lg:text-lg font-sans">Lorem ipsum</h5>
              <h5 className="text-sm lg:text-lg font-sans">Lorem ipsum</h5>
            </div>
          </div>

          <div className="hidden lg:block">
            <form className="flex flex-col items-start gap-8">
              <h5 className="text-2xl">Join our newsletter</h5>
              <div className="w-60 h-10 p-2 flex items-center gap-1 border border-colorAll rounded-md">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full h-full bg-transparent font-poppins"
                />
                <AiOutlineSend style={{ color: '#05E283' }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}
