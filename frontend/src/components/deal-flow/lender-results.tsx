import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

interface LenderResultsProps {
    results: any[]
}

export function LenderResults({ results }: LenderResultsProps) {
    if (results.length === 0) {
        return (
            <div className="flex h-full items-center justify-center p-8 text-center text-muted-foreground">
                Select a borrower and run matching to see lenders.
            </div>
        )
    }

    const solidMatches = results.filter(l => l.matchType === 'full' || !l.matchType)
    const partialMatches = results.filter(l => l.matchType === 'partial')

    return (
        <div className="h-full flex flex-col overflow-hidden">
            <div className="px-4 py-2 border-b flex items-center justify-between bg-muted/20 flex-shrink-0">
                <h3 className="font-semibold text-sm">Matched Lenders ({results.length})</h3>
                <Button size="sm" variant="default" className="h-7 text-xs">Add Selection</Button>
            </div>
            <ScrollArea className="flex-1 min-h-0">
                <div>
                    {solidMatches.length > 0 && (
                        <div>
                            <div className="px-4 py-2 bg-green-50/50 border-b border-green-200">
                                <h4 className="text-xs font-semibold text-green-900">Solid Matches ({solidMatches.length})</h4>
                            </div>
                            <div className="divide-y">
                                {solidMatches.map((lender) => (
                                    <div key={lender.id} className="px-4 py-3 hover:bg-muted/50 transition-colors">
                                        <div className="flex items-start gap-3">
                                            <Checkbox className="mt-1" />
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-2 mb-1">
                                                    <div className="font-medium text-sm break-words">{lender.name}</div>
                                                    <Badge 
                                                        variant="secondary" 
                                                        className={`text-xs h-5 flex-shrink-0 ${
                                                            lender.fit >= 90 
                                                                ? "bg-green-100 text-green-800 hover:bg-green-100" 
                                                                : lender.fit >= 80 
                                                                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                                                : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                                        }`}
                                                    >
                                                        {lender.fit}%
                                                    </Badge>
                                                </div>
                                                <div className="text-xs text-muted-foreground space-y-0.5 mb-1.5">
                                                    <div className="break-words">{lender.focus_industries}</div>
                                                    <div className="break-words">{lender.debt_products}</div>
                                                    {lender.loan_size_requirements && (
                                                        <div className="text-[11px] text-muted-foreground/80">
                                                            Size: {lender.loan_size_requirements}
                                                        </div>
                                                    )}
                                                </div>
                                                {lender.explanation && (
                                                    <div className="mt-1.5 pt-1.5 border-t border-green-200">
                                                        <div className="text-[10px] font-medium text-green-700 mb-0.5">Match Explanation:</div>
                                                        <div className="text-[10px] text-green-600 leading-relaxed break-words">{lender.explanation}</div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {partialMatches.length > 0 && (
                        <div>
                            <div className="px-4 py-2 bg-orange-50/50 border-b border-orange-200">
                                <h4 className="text-xs font-semibold text-orange-900">Partial Matches ({partialMatches.length})</h4>
                            </div>
                            <div className="divide-y">
                                {partialMatches.map((lender) => (
                                    <div key={lender.id} className="px-4 py-3 hover:bg-muted/50 transition-colors">
                                        <div className="flex items-start gap-3">
                                            <Checkbox className="mt-1" />
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between gap-2 mb-1">
                                                    <div className="flex items-center gap-2 min-w-0">
                                                        <div className="font-medium text-sm break-words">{lender.name}</div>
                                                        <Badge variant="outline" className="text-[10px] h-4 px-1.5 border-orange-300 text-orange-700 bg-orange-50 flex-shrink-0">
                                                            Partial
                                                        </Badge>
                                                    </div>
                                                    <Badge 
                                                        variant="secondary" 
                                                        className={`text-xs h-5 flex-shrink-0 ${
                                                            lender.fit >= 90 
                                                                ? "bg-green-100 text-green-800 hover:bg-green-100" 
                                                                : lender.fit >= 80 
                                                                ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                                                : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                                                        }`}
                                                    >
                                                        {lender.fit}%
                                                    </Badge>
                                                </div>
                                                <div className="text-xs text-muted-foreground space-y-0.5 mb-1.5">
                                                    <div className="break-words">{lender.focus_industries}</div>
                                                    <div className="break-words">{lender.debt_products}</div>
                                                    {lender.loan_size_requirements && (
                                                        <div className="text-[11px] text-muted-foreground/80">
                                                            Size: {lender.loan_size_requirements}
                                                        </div>
                                                    )}
                                                </div>
                                                {lender.partialReason && (
                                                    <div className="mt-1.5 pt-1.5 border-t border-orange-200">
                                                        <div className="text-[10px] font-medium text-orange-700 mb-0.5">Why Partial Match:</div>
                                                        <div className="text-[10px] text-orange-600 leading-relaxed break-words">{lender.partialReason}</div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>
        </div>
    )
}
