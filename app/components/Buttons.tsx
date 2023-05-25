'use client'

import { motion } from 'framer-motion'

type ButtonProps = {
  text: string
  className?: string
}

const Buttons: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <motion.button
      className={`button ${className}`}
      whileHover={{ scale: 1.1, opacity: 0.8, background: '#05E283' }}
      whileTap={{ scale: 0.9, opacity: 0.6, background: '#1FC77E' }}
    >
      {text}
    </motion.button>
  )
}

export default Buttons
