import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";


export default function DashboardNav() {
  
  return (
    <nav className=" pl-10 flex flex-col">
      <Link 
        href="/packs" 
        className={cn(
          "flex items-center text-lg font-medium transition-colors ",
         )}
      >
        <Icons.backpack className="mr-2 h-6 w-6" />
        My Packs
      </Link>
      <Link href="/gear" className="flex">
        <Icons.store className="mr-2 h-6 w-6" />
        My Gear
      </Link>
      <Link href="/communitypacks" className="flex">
        <Icons.backpack className="mr-2 h-6 w-6" />
        Community Packs
      </Link>
      <Link href="/communitygear" className="flex">
        <Icons.store className="mr-2 h-6 w-6" />
        Community Gear
      </Link>
    </nav>
  )
}
