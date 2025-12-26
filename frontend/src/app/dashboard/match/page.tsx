"use client"

import * as React from "react"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { BorrowerList } from "@/components/deal-flow/borrower-list"
import { LenderResults } from "@/components/deal-flow/lender-results"
import { ReasoningChain } from "@/components/deal-flow/reasoning-chain"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { MOCK_ENTITIES as attioEntities, MOCK_BORROWER_DETAILS as borrowerDetailsMock } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function MatchPage() {
    const [selectedBorrowerId, setSelectedBorrowerId] = React.useState<string | null>(null)
    const [prompt, setPrompt] = React.useState(`You are an expert growth financing advisor specializing in software and services companies, with deep expertise in venture debt, recurring revenue financing, and growth capital markets.

**Core Mission:**
Match software and services companies with optimal lenders by conducting comprehensive multi-factor analysis that goes beyond surface-level criteria matching.

**Analysis Framework:**

1. **Financial Fit Analysis:**
   - Calculate and verify metrics: ARR (Annual Recurring Revenue), MRR growth rates, burn rate, runway, and debt-to-ARR ratios
   - Assess loan size alignment with lender's typical deal size and portfolio concentration limits
   - Evaluate company's financial strength: revenue growth trajectory, gross margins, customer acquisition costs (CAC), and lifetime value (LTV)
   - Consider lender's risk appetite, underwriting standards, and experience with similar stage companies

2. **Product & Structure Alignment:**
   - Match financing products (Venture Debt, ARR-based Loans, Growth Capital, Working Capital, Recurring Revenue Financing) to company lifecycle stage
   - Evaluate interest rate structures (fixed, floating, hybrid) and their suitability for cash flow patterns
   - Assess prepayment flexibility, warrant coverage, and covenant structures
   - Consider subordinate debt needs, equity requirements, and capital stack optimization

3. **Business Model & Market Context:**
   - Verify industry specialization (SaaS, Software, Services, Technology, etc.)
   - Evaluate business model alignment (B2B, B2C, marketplace, platform)
   - Consider lender's experience with similar business models, revenue models (subscription, usage-based, transaction-based), and market segments
   - Assess market conditions, competitive landscape, and lender's current market positioning

4. **Operational & Strategic Fit:**
   - Evaluate lender's speed to close and process efficiency
   - Consider relationship factors, repeat business potential, and strategic partnerships
   - Assess lender's ability to provide value-add services (growth advisory, network introductions, strategic guidance)
   - Evaluate lender's flexibility for modifications, extensions, or future capital needs

**Match Classification:**

- **Full Match (85%+ fit):** All critical criteria align, strong probability of successful execution
- **Partial Match (70-84% fit):** Some criteria align but notable gaps exist; may require negotiation or compromise
- **Marginal Match (<70% fit):** Significant misalignments; only recommend if borrower has limited options

**Output Requirements:**

- Provide clear, quantitative fit scores with transparent methodology
- Explain the "why" behind each match with specific, actionable reasoning
- For partial matches, explicitly identify gaps and potential negotiation points
- Prioritize matches that maximize borrower success probability, not just initial fit
- Consider deal velocity, certainty of close, and long-term relationship value

**Communication Style:**
- Professional, precise, and data-driven
- Use industry terminology appropriately (ARR, MRR, CAC, LTV, burn rate, runway, etc.)
- Highlight both opportunities and risks
- Provide actionable insights, not just descriptions`)
    const [isMatching, setIsMatching] = React.useState(false)
    const [results, setResults] = React.useState<any[]>([])
    const [reasoningChain, setReasoningChain] = React.useState<any[]>([])
    const [previousRuns, setPreviousRuns] = React.useState<Array<{
        id: string;
        timestamp: string;
        borrowerName: string;
        systemPrompt: string;
        reasoningChain: any[];
        results: any[];
    }>>([])

    const selectedBorrower = React.useMemo(() => {
        // attioEntities is an array (MOCK_ENTITIES)
        // We match by 'id' not 'record_id'
        const entity = attioEntities.find(e => e.id === selectedBorrowerId)
        // We also likely want the DETAILS from borrowerDetailsMock
        if (entity) {
            return borrowerDetailsMock[entity.id]
        }
        return null
    }, [selectedBorrowerId])

    const handleMatch = async () => {
        if (!selectedBorrower) {
            toast.error("Please select a borrower first.")
            return
        }

        setIsMatching(true)
        toast.info("Matching initiated...")

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500))

        try {
            // Mock lender results based on borrower criteria - includes full and partial matches
            const loanAmount = selectedBorrower.loanAmount
            const mockLenders = [
                {
                    id: 'l1',
                    name: 'Hercules Capital',
                    focus_industries: 'Technology, SaaS, Software',
                    debt_products: 'Venture Debt, ARR-based Loans, Growth Capital',
                    loan_size_requirements: '$2M - $50M',
                    fit: 95,
                    matchType: 'full',
                    explanation: 'Excellent fit: Strong focus on SaaS and Software companies. Loan size perfectly within range. ARR-based and Growth Capital products align with growth financing needs.'
                },
                {
                    id: 'l2',
                    name: 'Espresso Capital',
                    focus_industries: 'SaaS, Software, Recurring Revenue',
                    debt_products: 'Recurring Revenue Loans, ARR Financing',
                    loan_size_requirements: '$3M - $40M',
                    fit: 92,
                    matchType: 'full',
                    explanation: 'Strong match: SaaS and recurring revenue focus aligns perfectly. ARR Financing product directly matches growth capital needs. Loan size within acceptable range.'
                },
                {
                    id: 'l3',
                    name: 'Pacific Lending Group',
                    focus_industries: 'Technology, Software, Services',
                    debt_products: 'Venture Debt, Growth Capital',
                    loan_size_requirements: '$5M - $75M',
                    fit: 88,
                    matchType: 'full',
                    explanation: 'Good fit: Technology and Software focus relevant. Growth Capital available. Loan size at lower end but acceptable.'
                },
                {
                    id: 'l4',
                    name: 'Coastline Financial',
                    focus_industries: 'Technology, Software',
                    debt_products: 'Term Loans, Working Capital',
                    loan_size_requirements: '$1M - $30M',
                    fit: 85,
                    matchType: 'partial',
                    partialReason: `Loan size ($${(loanAmount / 1000000).toFixed(1)}M) exceeds preferred maximum ($30M). Focus is general technology, not specifically SaaS. Term Loans less suitable than ARR-based financing for recurring revenue models.`
                },
                {
                    id: 'l5',
                    name: 'Urban Capital Partners',
                    focus_industries: 'SaaS, Software',
                    debt_products: 'Growth Capital, Refinance',
                    loan_size_requirements: '$4M - $60M',
                    fit: 82,
                    matchType: 'partial',
                    partialReason: 'Loan size acceptable but at lower end of range. Refinance product not ideal for new growth initiatives. Geographic focus not specified for target location.'
                },
                {
                    id: 'l6',
                    name: 'Heritage Lending',
                    focus_industries: 'Traditional Business, SMB',
                    debt_products: 'SBA Loans, Commercial Loans',
                    loan_size_requirements: '$2M - $25M',
                    fit: 72,
                    matchType: 'partial',
                    partialReason: 'Business model mismatch: Focuses on traditional SMB, not high-growth SaaS. Product types (SBA, Commercial Loans) not ideal for software company growth financing. Loan size at upper limit.'
                },
                {
                    id: 'l7',
                    name: 'Real Estate Capital',
                    focus_industries: 'Real Estate, Construction',
                    debt_products: 'Bridge Loans, Construction Loans',
                    loan_size_requirements: '$1M - $20M',
                    fit: 65,
                    matchType: 'partial',
                    partialReason: 'Industry mismatch: Specializes in Real Estate, not software/services. Products (Bridge Loans, Construction) completely misaligned with software company financing needs. Loan size too small.'
                }
            ]

            // Enhanced mock reasoning chain with math, queries, and detailed explanations
            const arr = loanAmount * 2.5 // Estimate ARR based on loan amount
            const mrr = arr / 12
            
            const mockReasoningChain = [
                {
                    step: 1,
                    type: 'SystemMessage',
                    content: prompt || 'You are an expert growth financing advisor specializing in software and services companies.',
                    timestamp: new Date().toISOString()
                },
                {
                    step: 2,
                    type: 'HumanMessage',
                    content: `Find lenders for ${selectedBorrower.name}. Criteria: ${selectedBorrower.description}. Loan Amount: $${(loanAmount / 1000000).toFixed(1)}M. Project Type: ${selectedBorrower.projectType}. Location: ${selectedBorrower.location}`,
                    timestamp: new Date().toISOString()
                },
                {
                    step: 3,
                    type: 'AIMessage',
                    content: `Analyzing company requirements:\n- Loan Amount: $${(loanAmount / 1000000).toFixed(1)}M\n- Project Type: ${selectedBorrower.projectType}\n- Business Model: ${selectedBorrower.assetType}\n- Location: ${selectedBorrower.location}\n\nI'll first retrieve detailed company information, then calculate key financial metrics (ARR, MRR, growth rate) to determine optimal lender matches.`,
                    toolCalls: [
                        {
                            name: 'find_borrower',
                            args: { name: selectedBorrower.name },
                            id: 'tool_call_1'
                        }
                    ],
                    timestamp: new Date().toISOString()
                },
                {
                    step: 4,
                    type: 'ToolMessage',
                    content: JSON.stringify({
                        id: selectedBorrower.id,
                        name: selectedBorrower.name,
                        loanAmount: loanAmount,
                        assetType: selectedBorrower.assetType,
                        location: selectedBorrower.location,
                        projectType: selectedBorrower.projectType,
                        estimatedARR: arr,
                        estimatedMRR: mrr
                    }),
                    timestamp: new Date().toISOString()
                },
                {
                    step: 5,
                    type: 'AIMessage',
                    content: `Company details retrieved. Now calculating key financial metrics to assess financing feasibility and lender requirements.`,
                    toolCalls: [
                        {
                            name: 'do_math',
                            args: { expression: `Estimated ARR: $${(arr / 1000000).toFixed(1)}M, MRR: $${(mrr / 1000).toFixed(0)}K, Growth Rate: 45% YoY` },
                            id: 'tool_call_2'
                        }
                    ],
                    timestamp: new Date().toISOString()
                },
                {
                    step: 6,
                    type: 'ToolMessage',
                    content: `Financial metrics calculated:\n- Estimated ARR: $${(arr / 1000000).toFixed(1)}M\n- Estimated MRR: $${(mrr / 1000).toFixed(0)}K\n- Growth Rate: 45% YoY\n- Burn Rate: $${((loanAmount / 18) / 1000).toFixed(0)}K/month\n- Runway Extension: 18 months`,
                    timestamp: new Date().toISOString()
                },
                {
                    step: 7,
                    type: 'AIMessage',
                    content: `Financial Analysis:\n- Loan Amount: $${(loanAmount / 1000000).toFixed(1)}M\n- Estimated ARR: $${(arr / 1000000).toFixed(1)}M\n- Estimated MRR: $${(mrr / 1000).toFixed(0)}K\n- Growth Rate: 45% YoY\n- Debt-to-ARR Ratio: ${((loanAmount / arr) * 100).toFixed(0)}%\n- CAC Payback: Calculated based on typical ${selectedBorrower.assetType} metrics\n\nThis ${selectedBorrower.projectType} falls within standard lender parameters. Searching for lenders specializing in ${selectedBorrower.assetType} companies in ${selectedBorrower.location}.`,
                    toolCalls: [
                        {
                            name: 'find_lenders',
                            args: {
                                criteria: `${selectedBorrower.projectType}, ${selectedBorrower.assetType}, ${selectedBorrower.location}, $${(loanAmount / 1000000).toFixed(1)}M`
                            },
                            id: 'tool_call_3'
                        }
                    ],
                    timestamp: new Date().toISOString()
                },
                {
                    step: 8,
                    type: 'ToolMessage',
                    content: JSON.stringify(mockLenders),
                    timestamp: new Date().toISOString()
                },
                {
                    step: 9,
                    type: 'AIMessage',
                    content: `Found ${mockLenders.length} potential lenders. Now calculating fit scores based on:\n1. Loan size match (${(loanAmount / 1000000).toFixed(1)}M within lender range)\n2. Business model alignment (${selectedBorrower.assetType})\n3. Geographic focus (${selectedBorrower.location})\n4. Product type match (${selectedBorrower.projectType})\n5. ARR/MRR requirements`,
                    toolCalls: [
                        {
                            name: 'do_math',
                            args: { expression: `Fit score calculation: Size match (40%) + Business model (30%) + Geography (15%) + Product (10%) + ARR alignment (5%)` },
                            id: 'tool_call_4'
                        }
                    ],
                    timestamp: new Date().toISOString()
                },
                {
                    step: 10,
                    type: 'ToolMessage',
                    content: `Fit scores calculated using weighted algorithm:\n- Size match: 40% weight\n- Business model: 30% weight\n- Geography: 15% weight\n- Product type: 10% weight\n- ARR/MRR alignment: 5% weight`,
                    timestamp: new Date().toISOString()
                },
                {
                    step: 11,
                    type: 'AIMessage',
                    content: `Match Analysis Complete:\n\n**Solid Matches:**\n\n**Top Match: ${mockLenders[0].name} (95% fit)**\n- Explanation: Excellent fit due to strong focus on ${selectedBorrower.assetType} and Technology/SaaS companies. Loan size of $${(loanAmount / 1000000).toFixed(1)}M falls perfectly within their $2M-$50M range. Their Venture Debt and ARR-based Loans products align with ${selectedBorrower.projectType} needs.\n\n**Second Match: ${mockLenders[1].name} (92% fit)**\n- Explanation: Strong match with SaaS and recurring revenue focus. Loan size within acceptable range ($3M-$40M). ARR Financing product directly matches growth capital needs.\n\n**Third Match: ${mockLenders[2].name} (88% fit)**\n- Explanation: Good fit with Technology and Software focus. Growth Capital available. Loan size at lower end of their range but acceptable.\n\n**Partial Matches:**\n\n**Fourth Match: ${mockLenders[3].name} (85% fit) - PARTIAL**\n- Explanation: Loan size ($${(loanAmount / 1000000).toFixed(1)}M) exceeds preferred maximum ($30M). Focus is general technology, not specifically SaaS. Term Loans less suitable than ARR-based financing for recurring revenue models.\n\n**Fifth Match: ${mockLenders[4].name} (82% fit) - PARTIAL**\n- Explanation: Loan size acceptable but at lower end of range. Refinance product not ideal for new growth initiatives. Geographic focus not specified for target location.\n\n**Sixth Match: ${mockLenders[5].name} (72% fit) - PARTIAL**\n- Explanation: Business model mismatch: Focuses on traditional SMB, not high-growth SaaS. Product types (SBA, Commercial Loans) not ideal for software company growth financing. Loan size at upper limit.\n\n**Seventh Match: ${mockLenders[6].name} (65% fit) - PARTIAL**\n- Explanation: Industry mismatch: Specializes in Real Estate, not software/services. Products (Bridge Loans, Construction) completely misaligned with software company financing needs. Loan size too small.\n\nAll lenders have been evaluated and ranked by fit score. Solid matches are recommended, partial matches may require additional negotiation or may not be suitable.`,
                    timestamp: new Date().toISOString()
                }
            ]

            setResults(mockLenders)
            setReasoningChain(mockReasoningChain)
            
            // Save to previous runs
            const newRun = {
                id: `run-${Date.now()}`,
                timestamp: new Date().toISOString(),
                borrowerName: selectedBorrower.name,
                systemPrompt: prompt,
                reasoningChain: mockReasoningChain,
                results: mockLenders
            }
            setPreviousRuns(prev => [newRun, ...prev].slice(0, 10)) // Keep last 10 runs
            
            toast.success(`Found ${mockLenders.length} potential matches!`)

        } catch (error) {
            console.error(error)
            toast.error("Error processing match.")
        } finally {
            setIsMatching(false)
        }
    }

    return (
        <TooltipProvider delayDuration={0}>
            <div className="h-[calc(100vh-4rem)] flex flex-col -mt-8 -mx-8">
                <ResizablePanelGroup
                    direction="horizontal"
                    onLayout={(sizes: number[]) => {
                        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                            sizes
                        )}`
                    }}
                    className="h-full items-stretch"
                >
                    <ResizablePanel defaultSize={14} minSize={10} maxSize={20} className="overflow-hidden">
                        <BorrowerList
                            selectedId={selectedBorrowerId}
                            onSelect={setSelectedBorrowerId}
                        />
                    </ResizablePanel>

                    <ResizableHandle />

                    <ResizablePanel defaultSize={22} minSize={18} maxSize={30} className="overflow-hidden">
                        <Tabs defaultValue="prompt" className="h-full flex flex-col overflow-hidden">
                            <div className="flex items-center px-4 py-2 justify-between flex-shrink-0">
                                <span className="font-semibold text-sm">Matching Console</span>
                                {selectedBorrower && <Badge variant="outline">{selectedBorrower.name}</Badge>}
                            </div>
                            <Separator className="flex-shrink-0" />

                            <ScrollArea className="flex-1 min-h-0">
                            <div className="p-4 flex flex-col gap-3">
                                {selectedBorrower ? (
                                    <>
                                        <Button
                                            size="lg"
                                            className="w-full"
                                            onClick={handleMatch}
                                            disabled={isMatching}
                                        >
                                            {isMatching ? "Running Agent..." : "Find Matches"}
                                        </Button>

                                        {/* Business Overview */}
                                        {selectedBorrower.businessDescription && (
                                            <div className="space-y-2">
                                                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Business Overview</div>
                                                <div className="text-sm leading-relaxed">{selectedBorrower.businessDescription}</div>
                                            </div>
                                        )}

                                        {/* Owners/Leadership */}
                                        {selectedBorrower.owners && selectedBorrower.owners.length > 0 && (
                                            <div className="space-y-2">
                                                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Leadership</div>
                                                <div className="divide-y border rounded-md">
                                                    {selectedBorrower.owners.map((owner, idx) => (
                                                        <div key={idx} className="px-3 py-2 text-sm">
                                                            <div className="font-medium">{owner.name}</div>
                                                            <div className="text-xs text-muted-foreground">{owner.role}</div>
                                                            {owner.email && (
                                                                <div className="text-xs text-muted-foreground/80 mt-0.5">{owner.email}</div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Financial Metrics */}
                                        <div className="space-y-2">
                                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Financial Metrics</div>
                                            <div className="grid grid-cols-2 gap-2 text-xs">
                                                {selectedBorrower.arr !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border">
                                                        <div className="text-muted-foreground mb-0.5">ARR</div>
                                                        <div className="font-semibold">${(selectedBorrower.arr / 1000000).toFixed(1)}M</div>
                                                    </div>
                                                )}
                                                {selectedBorrower.ltmRevenue !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border">
                                                        <div className="text-muted-foreground mb-0.5">LTM Revenue</div>
                                                        <div className="font-semibold">${(selectedBorrower.ltmRevenue / 1000000).toFixed(1)}M</div>
                                                    </div>
                                                )}
                                                {selectedBorrower.mrr !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border">
                                                        <div className="text-muted-foreground mb-0.5">MRR</div>
                                                        <div className="font-semibold">${(selectedBorrower.mrr / 1000).toFixed(0)}K</div>
                                                    </div>
                                                )}
                                                {selectedBorrower.growthRate !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border">
                                                        <div className="text-muted-foreground mb-0.5">Growth (YoY)</div>
                                                        <div className="font-semibold text-green-600">+{selectedBorrower.growthRate}%</div>
                                                    </div>
                                                )}
                                                {selectedBorrower.grossMargin !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border">
                                                        <div className="text-muted-foreground mb-0.5">Gross Margin</div>
                                                        <div className="font-semibold">{selectedBorrower.grossMargin}%</div>
                                                    </div>
                                                )}
                                                {selectedBorrower.burnRate !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border">
                                                        <div className="text-muted-foreground mb-0.5">Burn Rate</div>
                                                        <div className="font-semibold">${(selectedBorrower.burnRate / 1000).toFixed(0)}K/mo</div>
                                                    </div>
                                                )}
                                                {selectedBorrower.runway !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border">
                                                        <div className="text-muted-foreground mb-0.5">Runway</div>
                                                        <div className="font-semibold">{selectedBorrower.runway} months</div>
                                                    </div>
                                                )}
                                                {selectedBorrower.cac !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border">
                                                        <div className="text-muted-foreground mb-0.5">CAC</div>
                                                        <div className="font-semibold">${(selectedBorrower.cac / 1000).toFixed(1)}K</div>
                                                    </div>
                                                )}
                                                {selectedBorrower.ltv !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border">
                                                        <div className="text-muted-foreground mb-0.5">LTV</div>
                                                        <div className="font-semibold">${(selectedBorrower.ltv / 1000).toFixed(1)}K</div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Company Info */}
                                        <div className="space-y-2">
                                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Company Info</div>
                                            <div className="grid grid-cols-2 gap-2 text-xs">
                                                {selectedBorrower.employees !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border">
                                                        <div className="text-muted-foreground mb-0.5">Employees</div>
                                                        <div className="font-semibold">{selectedBorrower.employees}</div>
                                                    </div>
                                                )}
                                                {selectedBorrower.customers !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border">
                                                        <div className="text-muted-foreground mb-0.5">Customers</div>
                                                        <div className="font-semibold">{selectedBorrower.customers}</div>
                                                    </div>
                                                )}
                                                {selectedBorrower.foundedYear !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border">
                                                        <div className="text-muted-foreground mb-0.5">Founded</div>
                                                        <div className="font-semibold">{selectedBorrower.foundedYear}</div>
                                                    </div>
                                                )}
                                                <div className="px-3 py-2 bg-muted/30 rounded border">
                                                    <div className="text-muted-foreground mb-0.5">Location</div>
                                                    <div className="font-semibold">{selectedBorrower.location}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Loan Parameters */}
                                        <div className="space-y-2">
                                            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Loan Parameters</div>
                                            <div className="grid grid-cols-2 gap-2 text-xs">
                                                <div className="px-3 py-2 bg-muted/30 rounded border">
                                                    <div className="text-muted-foreground mb-0.5">Loan Amount</div>
                                                    <div className="font-semibold">${(Number(selectedBorrower.loanAmount) / 1000000).toFixed(1)}M</div>
                                                </div>
                                                <div className="px-3 py-2 bg-muted/30 rounded border">
                                                    <div className="text-muted-foreground mb-0.5">Project Type</div>
                                                    <div className="font-semibold">{selectedBorrower.projectType}</div>
                                                </div>
                                                {selectedBorrower.arr !== undefined && (
                                                    <div className="px-3 py-2 bg-muted/30 rounded border col-span-2">
                                                        <div className="text-muted-foreground mb-0.5">Debt-to-ARR Ratio</div>
                                                        <div className="font-semibold">{((selectedBorrower.loanAmount / selectedBorrower.arr) * 100).toFixed(0)}%</div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="px-3 py-2 bg-muted/30 rounded border text-xs">
                                                <div className="text-muted-foreground mb-0.5">Purpose</div>
                                                <div className="font-medium">{selectedBorrower.description}</div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 flex-1 min-h-[200px]">
                                            <Label>System Prompt</Label>
                                            <Textarea
                                                className="flex-1 font-mono text-sm resize-none"
                                                value={prompt}
                                                onChange={(e) => setPrompt(e.target.value)}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex h-full items-center justify-center text-muted-foreground">
                                        Select a borrower from the left to start matching.
                                    </div>
                                )}
                            </div>
                            </ScrollArea>
                        </Tabs>
                    </ResizablePanel>

                    <ResizableHandle />

                    <ResizablePanel defaultSize={25} minSize={18} maxSize={35} className="overflow-hidden">
                        <ReasoningChain 
                            chain={reasoningChain} 
                            previousRuns={previousRuns}
                            onLoadRun={(run) => {
                                setReasoningChain(run.reasoningChain)
                                setResults(run.results)
                                setPrompt(run.systemPrompt)
                                toast.info(`Loaded run from ${new Date(run.timestamp).toLocaleString()}`)
                            }}
                        />
                    </ResizablePanel>

                    <ResizableHandle />

                    <ResizablePanel defaultSize={35} minSize={25} maxSize={45} className="overflow-hidden">
                        <LenderResults results={results} />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </TooltipProvider>
    )
}
