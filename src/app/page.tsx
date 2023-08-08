import SiteHeader from '@/components/siteHeader'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

export default function HomePage() {
  return (
    <>
      <main className='mx-10'>
        <h1 className="text-3xl leading-tight tracking-tighter md:text-4xl">
          Your new backpack building <br/> and gear inventory tool
        </h1>
        <p className="max-w-[700px] text-lg">
          My Packs is a tool for backpackers to build and share their backpacking gear lists
        </p>
        <Card className='w-fit h-fit p-0 m-0 mt-5'>
          <Link href="/dashboard">
            <Button variant="link" > Get Started </Button>
          </Link>
        </Card>
      </main>
    </>
  )
}
