'use client'

import Link from 'next/link'

import { useState } from 'react'

import { MdArrowOutward } from 'react-icons/md'
import { GrClose } from 'react-icons/gr'
import { AiOutlineMenu } from 'react-icons/ai'

import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  }

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full h-16 grid place-items-center bg-transparent z-50 fixed left-0 top-0 relative">
      <div className="w-wsm md:w-wmd lg:w-wlg mx-auto flex items-center justify-between relative">
        {/* logo */}
        <div className="">
          <Link href="/" className="flex items-start gap-0">
            <h3 className="text-2xl font-sans font-bold">omnigpt</h3>

            <MdArrowOutward style={{ color: '#05E283', fontWeight: '400' }} />
          </Link>
        </div>

        {/* nav links */}
        <div className="hidden lg:block">
          <ul className="hidden lg:flex lg:items-center lg:gap-4 h-16">
            <li className="font-poppins text-lg capitalize md:cursor-pointer hover:text-colorGreenDark transition duration-200">
              <Link href="/">blog</Link>
            </li>
            <li className="font-poppins text-lg capitalize md:cursor-pointer hover:text-colorGreenDark transition duration-200">
              <Link href="/">contact us</Link>
            </li>
            <li className="font-poppins text-lg capitalize md:cursor-pointer hover:text-colorGreenDark transition duration-200">
              <Link href="/">sign in</Link>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden">
          <button
            className="text-white bg-transparent text-2xl"
            onClick={handleOpen}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>

      {/* mobile nav */}
      <motion.div
        className="w-80 h-[37rem] grid place-items-end absolute top-0 right-0"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
      >
        <div className="flex flex-col items-end gap-16 w-full h-full bg-backgroundColor pt-8 pr-20">
          <button
            className="text-white bg-transparent text-2xl"
            onClick={handleOpen}
          >
            <GrClose
              style={{ color: '#fff', background: '#fff', fontSize: '1.5rem' }}
            />
          </button>

          <ul className=" flex flex-col items-center gap-16 lg:hidden py-8 px-8">
            <li className="font-bold font-sans text-lg capitalize hover:text-colorGreenDark transition duration-200">
              <Link href="/">blog</Link>
            </li>
            <li className="font-bold font-sans text-lg capitalize hover:text-colorGreenDark transition duration-200">
              <Link href="/">contact us</Link>
            </li>
            <li className="font-bold font-sans text-lg capitalize hover:text-colorGreenDark transition duration-200">
              <Link href="/">sign in</Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  )
}
