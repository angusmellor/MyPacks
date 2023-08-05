'use client'

import { Icons } from "@/components/ui/icons";
import { useState } from "react";

export function WearableTag() {

  const [isWearable, setIsWearable] = useState(false);


  return (
      <Icons.shirt className=" h-6 w-6 " onClick={() => setIsWearable(!isWearable)} fill={isWearable ? "black" : "none"}/>
  )
}

export function ConsumableTag() {
  const [isConsumable, setIsConsumable] = useState(false);

  return (
    <Icons.utensils className=" h-6 w-6 " onClick={() => setIsConsumable(!isConsumable)} fill={isConsumable ? "black" : "none"}/>
  )

}

export function EditItem() { 

  return (
    <Icons.edit className=" h-6 w-6 hover:bg-background" />
  )
}

export function DeletItem() {

  return (
    <Icons.X className=" h-6 w-6 hover:bg-red-400" />
  )

}

