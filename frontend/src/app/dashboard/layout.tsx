import { SideNav } from "@/components/side-nav"
import { Search } from "@/components/search"
import { UserNav } from "@/components/user-nav"

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex h-screen overflow-hidden">
            <SideNav />
            <div className="flex flex-1 flex-col overflow-hidden">
                <div className="border-b">
                    <div className="flex h-16 items-center justify-between px-6">
                        <div className="flex items-center gap-4">
                            <Search />
                        </div>
                        <UserNav />
                    </div>
                </div>
                <div className="flex-1 overflow-auto p-8">
                    {children}
                </div>
            </div>
        </div>
    )
}
