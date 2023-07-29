import GearStoreBar from "@/components/dashboard/gearStoreBar";
import PackImage from "@/components/packImage";
import { Icons } from "@/components/ui/icons";


export default function DashboardPage() {

  return (
    <main className="bg-neutral-200 flex-1 flex justify-between">
      <section className=" flex flex-1 space-x-5 p-5">
        <div className="bg-white min-w-[50%]">Table</div>
        <div className=" flex flex-col space-y-5">
          <div className="bg-white h-fit p-2 ">
            <h1 className="text-3xl font-medium">The Dream</h1>
            <h2 className="text-2xl font-medium">Te Araoa</h2>
          </div>
          <div className="bg-white min-w-[25%] flex-auto">
            Summary
          </div>
        </div>
        <div className="bg-white p-2 flex flex-col space-y-2 ">
          <PackImage height={400} catWeights={[1,1,1,1]}/>
        </div>
      </section>
      <aside className="pt-5">
        <div className="bg-white flex flex-col items-center h-fit p-2">
          {/* <h1 className="text-2xl font-medium [writing-mode:vertical-rl] ">Gear Store</h1> */}
          <Icons.chevronLeft className="h-4 w-4" />
        </div>
      </aside>
    </main>
  )
}