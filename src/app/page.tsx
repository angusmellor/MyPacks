import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Your new backpack building <br/> and gear inventory tool
        </h1>
        <p className="max-w-[700px] text-lg">
          My Packs is a tool for backpackers to build and share their backpacking gear lists
        </p>
      </main>
    </>
  )
}
