import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function SiteHeader() {

  return (
    <header>
      <nav className="flex p-5">
        <Link
          href="/"
        >
          <h1 className="font-bold font-sans text-5xl">MyPacks.io</h1>
        </Link>
        <Link
          href="/dashboard"
        >
          <h1>Dashboard</h1>
        </Link>
      </nav>
    </header>
  )
}