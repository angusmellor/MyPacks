import GearStoreBar from "@/components/dashboard/gearStoreBar";
import PackImage from "@/components/packImage";


export default function DashboardPage() {

  return (
   <div className="flex w-full justify-between">
      <h1>Dashboard Page</h1>
      <PackImage/>
      <GearStoreBar>
        <h1>Lots of very cool items</h1>
      </GearStoreBar>
    </div>

  )
}