"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { MOCK_ENTITIES } from "@/lib/mock-data"

interface BorrowerListProps {
    selectedId: string | null
    onSelect: (id: string) => void
}

// Simple fuzzy search function
function fuzzyMatch(query: string, text: string): boolean {
    if (!query) return true
    const queryLower = query.toLowerCase().trim()
    const textLower = text.toLowerCase()
    
    // Exact match
    if (textLower.includes(queryLower)) return true
    
    // Fuzzy match: check if all query characters appear in order
    let queryIndex = 0
    for (let i = 0; i < textLower.length && queryIndex < queryLower.length; i++) {
        if (textLower[i] === queryLower[queryIndex]) {
            queryIndex++
        }
    }
    return queryIndex === queryLower.length
}

export function BorrowerList({ selectedId, onSelect }: BorrowerListProps) {
    const [searchQuery, setSearchQuery] = React.useState("")
    
    const borrowers = MOCK_ENTITIES.filter(e => e.type === 'borrower')
    
    const filteredBorrowers = React.useMemo(() => {
        if (!searchQuery.trim()) return borrowers
        
        return borrowers.filter(borrower => 
            fuzzyMatch(searchQuery, borrower.name) || 
            fuzzyMatch(searchQuery, borrower.status) ||
            (borrower.email && fuzzyMatch(searchQuery, borrower.email))
        )
    }, [borrowers, searchQuery])

    return (
        <div className="flex flex-col h-full overflow-hidden">
            <div className="p-4 border-b flex-shrink-0">
                <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search borrowers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-8"
                    />
                </div>
            </div>
            <ScrollArea className="flex-1 min-h-0">
                <div className="divide-y">
                    {filteredBorrowers.length === 0 ? (
                        <div className="text-center text-sm text-muted-foreground py-8 px-4">
                            No borrowers found matching "{searchQuery}"
                        </div>
                    ) : (
                        filteredBorrowers.map((item) => (
                            <button
                                key={item.id}
                                className={cn(
                                    "w-full px-4 py-2.5 text-left transition-colors hover:bg-muted/50",
                                    selectedId === item.id && "bg-muted"
                                )}
                                onClick={() => onSelect(item.id)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 min-w-0">
                                        <div className="font-medium text-sm">{item.name}</div>
                                        <div className="text-xs text-muted-foreground mt-0.5">{item.status}</div>
                                    </div>
                                </div>
                            </button>
                        ))
                    )}
                </div>
            </ScrollArea>
        </div>
    )
}
