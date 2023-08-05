import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";


export default function DashboardNav() {
  
  return (
    <nav className=" mt-5 flex flex-col mx-2">
      <Link href="/packs" className="  flex hover:bg-background p-2 justify-center items-center relative group transition-all" >
        <Icons.backpack className=" h-10 w-10" strokeWidth={1.5}/>
        <Card className=" absolute z-50 w-max left-20 hidden group-hover:block">
          <h1 className="text-lg font-bold">My Packs</h1>
        </Card>
      </Link>
      <Link href="/gear" className=" flex hover:bg-background p-2 justify-center items-center relative group transition-all">
        <Icons.tent className=" h-10 w-10" strokeWidth={1.5}/>
        <Card className=" absolute z-50 w-max left-20 hidden group-hover:block">
          <h1 className="text-lg font-bold">My Gear</h1>
        </Card>
      </Link>
      <Link href="/communitypacks" className=" flex hover:bg-background p-2 justify-center items-center relative group transition-all">
        <Icons.list className=" h-10 w-10" strokeWidth={1.5} />
        <Card className=" absolute z-50 w-max left-20 hidden group-hover:block">
          <h1 className="text-lg font-bold">Community Packs</h1>
        </Card>
      </Link>
      <Link href="/communitygear" className=" flex hover:bg-background p-2 justify-center items-center relative group transition-all">
        <Icons.store className=" h-10 w-10 " strokeWidth={1.5}/>
        <Card className=" absolute z-50 w-max left-20 hidden group-hover:block">
          <h1 className="text-lg font-bold">Comminity Gear</h1>
        </Card>
      </Link>
    </nav>
  )
}
