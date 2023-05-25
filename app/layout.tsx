import './globals.css'

import { Poppins, DM_Sans, Inconsolata } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  display: 'swap',
  variable: '--font-poppins',
  subsets: ['latin'],
})

const inconsolata = Inconsolata({
  weight: '400',
  display: 'swap',
  variable: '--font-inconsolata',
  subsets: ['latin'],
})

const sans = DM_Sans({
  weight: '400',
  display: 'swap',
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Omnigpt: Bring the power of AI to your conversations',
  description: 'Bring the power of AI to your conversations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${sans.variable} ${inconsolata.variable} bg-backgroundColor text-colorWhite overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
