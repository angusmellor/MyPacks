import SignIn from "@/components/SignIn";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header>
      <nav className="flex p-5 justify-between">
        <Link href="/">
          <h1 className="font-bold font-sans text-5xl">MyPacks.io</h1>
        </Link>
        {/* <Link
          href="/dashboard"
        >
          <h1>Dashboard</h1>
        </Link> */}
        <SignIn></SignIn>
      </nav>
    </header>
  );
}
