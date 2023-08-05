import GearStore from "@/components/dashboard/gearStore";
import ItemsByCatTable from "@/components/dashboard/itemsByCatTable";
import PackStats from "@/components/dashboard/packStats";
import PackImage from "@/components/packImage";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";


export default function DashboardPage() {

  return (
    <main className="bg-background flex-1 flex justify-center overflow-x-hidden relative">
      <section className=" flex space-x-5 p-5">
        <Card>
          <ItemsByCatTable className=" min-w-[40%]"/>
        </Card>
        <div className=" flex flex-1 flex-col space-y-5">
          <Card>
            <h1 className="text-3xl font-bold">The Dream</h1>
            <div className="flex items-center space-x-2">
              <Icons.compass className=" h-6 w-6 " />
              <h2 className="text-xl font-medium">Te Araoa</h2>
            </div>
          </Card>
          <Card className="flex w-full justify-around ">
            <Icons.share className=" h-6 w-6 " strokeWidth={1.5}/>
            <Icons.scale className=" h-6 w-6 " strokeWidth={1.5} />
          </Card>
          <PackStats className=" min-w-[25%] [filter:drop-shadow(var(--shadow))] " catWeights={[1,1,1]}/>
        </div>
        <Card className="flex-1 h-fit flex flex-col space-y-2">
          <PackImage height={400} catWeights={[1,5,2,1,1]}/>
        </Card>
      </section>
      <GearStore className=" h-fit absolute [filter:drop-shadow(3px_3px_black)]" />
    </main>
  )
}