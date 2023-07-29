import Dashboardnav from "@/components/dashboardNav"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="flex h-full" >
      <Dashboardnav />
      <main className=" flex-1 flex h-full bg-neutral-200-">
        {children}
      </main>
    </div>
  )
}