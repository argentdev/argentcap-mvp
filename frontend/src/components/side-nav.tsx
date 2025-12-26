"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
    LayoutDashboard, 
    Briefcase, 
    Users, 
    Handshake, 
    Building2, 
    FileText,
    ChevronRight,
    Settings,
    ChevronLeft,
    ChevronRight as ChevronRightIcon
} from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
    title: string
    href: string
    icon?: React.ComponentType<{ className?: string }>
}

interface NavGroup {
    title: string
    items: NavItem[]
    icon?: React.ComponentType<{ className?: string }>
}

const navGroups: NavGroup[] = [
    {
        title: "Main",
        items: [
            {
                title: "Overview",
                href: "/dashboard",
                icon: LayoutDashboard,
            },
            {
                title: "Projects",
                href: "/dashboard/projects",
                icon: Briefcase,
            },
            {
                title: "Matching",
                href: "/dashboard/match",
                icon: Handshake,
            },
        ],
    },
    {
        title: "Clients",
        icon: Users,
        items: [
            {
                title: "Lenders",
                href: "/dashboard/clients/lenders",
                icon: Building2,
            },
            {
                title: "Borrowers",
                href: "/dashboard/clients/borrowers",
                icon: FileText,
            },
        ],
    },
]

export function SideNav() {
    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = React.useState(false)
    const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>({
        Clients: pathname?.startsWith("/dashboard/clients") || false,
    })

    const toggleGroup = (groupTitle: string) => {
        setOpenGroups((prev) => ({
            ...prev,
            [groupTitle]: !prev[groupTitle],
        }))
    }

    return (
        <div className={cn(
            "flex h-full flex-col border-r bg-background transition-all duration-300",
            isCollapsed ? "w-16" : "w-64"
        )}>
            <div className="flex h-16 items-center border-b px-6 justify-between">
                {!isCollapsed && <h2 className="text-lg font-bold tracking-tight">ArgentCap</h2>}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-1.5 rounded-md hover:bg-accent transition-colors"
                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    {isCollapsed ? (
                        <ChevronRightIcon className="h-4 w-4" />
                    ) : (
                        <ChevronLeft className="h-4 w-4" />
                    )}
                </button>
            </div>
            <nav className="flex-1 space-y-1 p-4">
                {navGroups.map((group) => {
                    const hasSubItems = group.items.length > 0
                    const isActive = group.items.some((item) => pathname === item.href)
                    const isOpen = openGroups[group.title] || false

                    if (hasSubItems && group.title === "Clients") {
                        return (
                            <div key={group.title} className="space-y-1">
                                <button
                                    onClick={() => toggleGroup(group.title)}
                                    className={cn(
                                        "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                        isActive && "bg-accent text-accent-foreground",
                                        isCollapsed && "justify-center px-2"
                                    )}
                                    title={isCollapsed ? group.title : undefined}
                                >
                                    <div className="flex items-center gap-2">
                                        {group.icon && (
                                            <group.icon className="h-4 w-4 flex-shrink-0" />
                                        )}
                                        {!isCollapsed && <span>{group.title}</span>}
                                    </div>
                                    {!isCollapsed && (
                                        <ChevronRight
                                            className={cn(
                                                "h-4 w-4 transition-transform flex-shrink-0",
                                                isOpen && "rotate-90"
                                            )}
                                        />
                                    )}
                                </button>
                                {isOpen && !isCollapsed && (
                                    <div className="space-y-1 pl-4 pt-1">
                                        {group.items.map((item) => {
                                            const Icon = item.icon
                                            const isItemActive = pathname === item.href
                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className={cn(
                                                        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                                        isItemActive &&
                                                            "bg-accent text-accent-foreground"
                                                    )}
                                                >
                                                    {Icon && <Icon className="h-4 w-4" />}
                                                    <span>{item.title}</span>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        )
                    }

                    return (
                        <div key={group.title} className="space-y-1">
                            {group.items.map((item) => {
                                const Icon = item.icon
                                const isItemActive = pathname === item.href
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                            isItemActive &&
                                                "bg-accent text-accent-foreground",
                                            isCollapsed && "justify-center px-2"
                                        )}
                                        title={isCollapsed ? item.title : undefined}
                                    >
                                        {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
                                        {!isCollapsed && <span>{item.title}</span>}
                                    </Link>
                                )
                            })}
                        </div>
                    )
                })}
            </nav>
            <div className="border-t p-4">
                <Link
                    href="/dashboard/settings"
                    className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                        pathname === "/dashboard/settings" &&
                            "bg-accent text-accent-foreground",
                        isCollapsed && "justify-center px-2"
                    )}
                    title={isCollapsed ? "Settings" : undefined}
                >
                    <Settings className="h-4 w-4 flex-shrink-0" />
                    {!isCollapsed && <span>Settings</span>}
                </Link>
            </div>
        </div>
    )
}

