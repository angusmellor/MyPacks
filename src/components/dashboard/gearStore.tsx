'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { useState } from "react"

interface GearStoreProps {
  className?: string
}

export default function GearStore({className}: GearStoreProps ) {

  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <aside className={cn(className, ` ${isOpen ? 'end-0' : '-end-[100%]'} absolute flex items-start `,)}>
      <button onClick={() => setIsOpen(!isOpen)} className="bg-white border-black border-y border-l mt-[2.25rem] mr-[-1px] z-20">
        {isOpen 
          ? <Icons.chevronRight className="h-6 w-6 " />
          : <Icons.chevronLeft className="h-6 w-6 " />
        }
      </button> 
      <Tabs defaultValue="mygear">
        <TabsList>
          <TabsTrigger value="mygear" className=" font-bold w-fit">My Gear</TabsTrigger>
          <TabsTrigger value="comgear" className=" font-bold w-fit">Community Gear</TabsTrigger>
        </TabsList>
        <TabsContent value="mygear">
          <div className="flex justify-between">
            <h4 className=" font-medium">My Gear Table</h4>
          </div>   
        </TabsContent>
        <TabsContent value="comgear">
          <div className="flex flex-col justify-between">
            <h4 className=" font-medium">Community Gear Table</h4>
          </div> 
        </TabsContent>
      </Tabs>
    </aside>
  )
}