import './globals.css'
import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import { TailwindIndicator } from '@/components/tailwindIndicator'

const inter = Inter_Tight({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-sans'>      
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
