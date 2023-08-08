import './globals.css'
import type { Metadata } from 'next'
import { TailwindIndicator } from '@/components/tailwindIndicator'
import SiteHeader from '@/components/siteHeader'
import { lora } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'MyPacks.io',
  description: 'Backpack building and gear inventory tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={`${lora.variable} bg-foreground text-black font-sans relative flex h-full flex-col`}>
        <SiteHeader />      
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
