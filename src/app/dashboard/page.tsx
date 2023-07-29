import GearStoreBar from "@/components/dashboard/gearStoreBar";
import ItemsByCatTable from "@/components/dashboard/itemsByCatTable";
import PackStats from "@/components/dashboard/packStats";
import PackImage from "@/components/packImage";
import { Icons } from "@/components/ui/icons";


export default function DashboardPage() {

  return (
    <main className="bg-neutral-100 flex-1 flex justify-between">
      <section className=" flex flex-1 space-x-5 p-5">
        <ItemsByCatTable className="bg-white p-2 flex-1 min-w-[40a%] border-black border shadow"/>
        <div className=" flex flex-1 flex-col space-y-5">
          <div className="bg-white h-fit p-2 border-black border shadow  ">
            <h1 className="text-3xl font-bold">The Dream</h1>
            <div className="flex items-center space-x-2">
              <Icons.compass className=" h-6 w-6 " />
              <h2 className="text-xl font-medium">Te Araoa</h2>
            </div>
          </div>
          <PackStats className=" min-w-[25%] flex-auto " catWeights={[1,1,1]}/>
        </div>
        <div className="bg-white p-2 flex-1 flex flex-col space-y-2 border-black border shadow ">
          <PackImage height={400} catWeights={[1,3,2,1,1]}/>
        </div>
      </section>
      <aside className=" pt-5 [filter:drop-shadow(3px_3px_black)]">
          <Icons.chevronLeft className="h-6 w-6 bg-white border-black border-y border-l" />
      </aside>
    </main>
  )
}