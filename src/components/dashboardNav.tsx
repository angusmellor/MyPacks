import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";


export default function DashboardNav() {
  
  return (
    <nav className="flex flex-col">
        <Button size="sm" variant="secondary" className=" w-full justify-start text-xs min-w-max" asChild>
          <Link href="/packs">
            <Icons.backpack className="mr-2 h-4 w-4" />
          </Link>
        </Button>
        <Button size="sm" variant="secondary" className=" w-full justify-start text-xs min-w-max" asChild>
          <Link href="/gear">
            <Icons.store className="mr-2 h-4 w-4" />
          </Link>
        </Button>
        <Button size="sm" variant="default" className=" w-full justify-start text-xs min-w-max" asChild>
          <Link href="/communitypacks">
            <Icons.backpack className="mr-2 h-4 w-4" />
          </Link>
        </Button>
        <Button size="sm" variant="default" className=" w-full justify-start text-xs min-w-max" asChild>
          <Link href="/communitygear">
            <Icons.store className="mr-2 h-4 w-4" />
          </Link>
        </Button>
    </nav>
  )
}
