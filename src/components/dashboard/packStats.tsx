import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "../ui/separator";

export default function PackStats({className, catWeights}: {className?: string, catWeights: number[]}) {

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
            <h4 className="">{catWeights.reduce((p, a) =>(a + p))} kg</h4>
          </div>
          <div className="flex justify-between">
            <h4 className=" font-medium">Worn</h4>
            <h4 className="">{catWeights[3]} kg</h4>
          </div>
          <div className="flex justify-between">
            <h4 className=" font-medium">Consumable</h4>
            <h4 className="">{catWeights[3]} kg</h4>
          </div>
          <Separator className="my-1"/>
          <div className="flex justify-between">
            <h4 className=" font-medium">Base Weight</h4>
            <h4 className="">{Math.round((catWeights.reduce((p, a) =>(a + p)) - catWeights[3])*1000)/1000} kg</h4>
          </div>
        </TabsContent>
        <TabsContent value="categories">
          <div className="flex justify-between">
            <h4 className=" font-medium">Worn Weight</h4>
            <h4 className="">{catWeights[3]} kg</h4>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}