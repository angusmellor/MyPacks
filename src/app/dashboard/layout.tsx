import Dashboardnav from "@/components/dashboardNav"


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="flex min-h-screen flex-col space-y-6" >
      <aside>
        <Dashboardnav />
        
      </aside>
      <section>
        {children}
      </section>
    </div>
  )
}