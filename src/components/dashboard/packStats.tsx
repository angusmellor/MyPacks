import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "../ui/separator";
import { colourPalette } from "@/config/site";
import { Category } from "@/types/types";

export default function PackStats({className, categories}: {className?: string, categories: Category[]}) {

  const totalWeight = categories.reduce((p, a) => ( a.items.reduce((p, a) => {
    console.log(a)
    const weight = Number(a.weight) * Number(a.quantity)
    console.log(weight)
    return weight + p}, 0) + p ), 0)
  const wornWeight =  categories.reduce((p, a) =>(a.items.reduce((p, a) => a.worn ? a.weight + p : p, 0) + p), 0)
  const consumableWeight =  categories.reduce((p, a) =>(a.items.reduce((p, a) => a.consumable ? a.weight + p : p, 0) + p), 0)
  const baseWeight = totalWeight - wornWeight - consumableWeight

  console.log(totalWeight, wornWeight, consumableWeight, baseWeight)
  
  return (
    <div className={className}>
      <Tabs defaultValue="summary" className="text-lg p-0 border-separate">
        <TabsList>
          <TabsTrigger value="summary" className=" font-bold ">Summary</TabsTrigger>
          <TabsTrigger value="categories" className=" font-bold ">Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
            <div className="flex justify-between">
              <h4 className=" font-medium">Total</h4>
              <h4 className="">{totalWeight} kg</h4>
            </div>
            <div className="flex justify-between">
              <h4 className=" font-medium">Worn</h4>
              <h4 className="">{wornWeight} kg</h4>
            </div>
            <div className="flex justify-between">
              <h4 className=" font-medium">Consumable</h4>
              <h4 className="">{consumableWeight} kg</h4>
            </div>
            <Separator className="my-1"/>
            <div className="flex justify-between">
              <h4 className=" font-medium">Base Weight</h4>
              <h4 className="">{baseWeight} kg</h4>
            </div>
        </TabsContent>
        <TabsContent value="categories" className="flex flex-col space-y-1 text-lg font-bold">
          {categories.map((category, i) => (
            <div key={`${category.name} summary`} className="flex flex-row space-x-2">
              <div className={`bg-${colourPalette[i]} w-6 h-6 bg-[] border-black border`}></div>
              <h4 className=" font-medium">{category.name}</h4>
              <h2 >{category.items.reduce((p, a) =>(a.weight + p), 0)} kg</h2>
            </div>  
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}