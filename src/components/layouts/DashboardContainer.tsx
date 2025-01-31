import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { cookies } from "next/headers"
import { DashboardSidebar } from "../fragments/sidebar/Sidebar"
import { Navbar } from "../fragments/Navbar"

type DashboardContainerProps = {
    children: React.ReactNode
    className?: string
}
export const DashboardContainer: React.FC<DashboardContainerProps> = async ({
    children,
    className,
}) => {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
    return (
        <div className={`${className}`}>
            <SidebarProvider defaultOpen={defaultOpen}>
                <DashboardSidebar />
                <main className="flex min-h-svh flex-1 flex-col px-4 py-2">
                    <div className="flex items-center justify-between gap-4 mb-4">
                        <SidebarTrigger/>
                        <Navbar />
                    </div>
                    {children}
                </main>
            </SidebarProvider>
        </div >
    )
}
