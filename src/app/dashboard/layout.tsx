import Dashboardnav from "@/components/dashboardNav"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="flex min-h-screen space-y-6" >
      <aside>
        <Dashboardnav />
      </aside>
      <section className="w-full">
        {children}
      </section>
    </div>
  )
}