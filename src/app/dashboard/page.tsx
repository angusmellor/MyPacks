import Dashboard from "@/components/dashboard/dashboard";
import GearStore from "@/components/dashboard/gearStore";

export default function DashboardPage() {

  return (
    <>
      <Dashboard/>
      <GearStore className=" h-fit absolute [filter:drop-shadow(3px_3px_black)]" />
    </>
  )
}