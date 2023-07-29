'use client'

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface GearStoreBarProps {
  children: React.ReactNode
  className?: string
}

export default function GearStoreBar({children, className}: GearStoreBarProps ) {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={cn({className},"flex")}>
      <Button size="sm" variant="default" className=" justify-start text-xs min-w-min my-2 rounded-full-translate-y-1/2 " onClick={handleClick}>
        <Icons.chevronRight className={cn(`${isOpen? 'block' : 'hidden'}`,'min-w-min')} />
        <Icons.store className={cn(`${isOpen? 'hidden' : 'block'}`,'min-w-min')} />
      </Button>
    </div>
  )
}