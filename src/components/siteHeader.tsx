import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function SiteHeader() {

  return (
    <header>
      <nav>
        <Link
          href="/"
        >
          <h1>My Packs</h1>
        </Link>
      </nav>
      <Separator/>
    </header>
  )
}