import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ArrowUpRight, ArrowDownRight, Clock, TrendingUp, Briefcase } from "lucide-react"

// Mock pipeline data based on schema stages
const pipelineStages = [
    { stage: 'Sourcing', deals: 45, value: 125000000, avgDays: 12, conversion: 100 },
    { stage: 'Matched', deals: 28, value: 78000000, avgDays: 18, conversion: 62 },
    { stage: 'Term Sheet', deals: 12, value: 35000000, avgDays: 25, conversion: 43 },
    { stage: 'Closed', deals: 8, value: 22000000, avgDays: 0, conversion: 67 },
]

const recentDeals = [
    { id: '1', company: 'Acme Software Inc', lender: 'Hercules Capital', stage: 'Term Sheet', value: 5000000, daysInStage: 8, productType: 'Growth Capital' },
    { id: '2', company: 'Beacon Hill Analytics', lender: 'Espresso Capital', stage: 'Matched', value: 12000000, daysInStage: 5, productType: 'ARR Financing' },
    { id: '3', company: 'Summit Ventures', lender: 'Pacific Lending Group', stage: 'Sourcing', value: 8500000, daysInStage: 3, productType: 'Venture Debt' },
    { id: '4', company: 'Riverside SaaS LLC', lender: 'Coastline Financial', stage: 'Closed', value: 15000000, daysInStage: 0, productType: 'Working Capital' },
    { id: '5', company: 'Metro Tech Group', lender: 'Urban Capital Partners', stage: 'Term Sheet', value: 25000000, daysInStage: 12, productType: 'Growth Financing' },
]

export default function DashboardPage() {
    const totalPipelineValue = pipelineStages.reduce((sum, stage) => sum + stage.value, 0)
    const totalDeals = pipelineStages.reduce((sum, stage) => sum + stage.deals, 0)
    const avgVelocity = pipelineStages
        .filter(s => s.avgDays > 0)
        .reduce((sum, stage) => sum + stage.avgDays, 0) / pipelineStages.filter(s => s.avgDays > 0).length

    return (
        <>
            <div className="flex items-center justify-between space-y-2 mb-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    <p className="text-muted-foreground">Pipeline velocity and deal metrics</p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button asChild>
                        <Link href="/dashboard/match">New Match</Link>
                    </Button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Pipeline Value</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${(totalPipelineValue / 1000000).toFixed(1)}M</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <ArrowUpRight className="h-3 w-3 text-green-600" />
                            +12.5% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalDeals}</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <ArrowUpRight className="h-3 w-3 text-green-600" />
                            +8 deals this month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Avg. Pipeline Velocity</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{avgVelocity.toFixed(0)} days</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <ArrowDownRight className="h-3 w-3 text-red-600" />
                            -3 days vs last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Close Rate</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">18%</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <ArrowUpRight className="h-3 w-3 text-green-600" />
                            +2.3% from last quarter
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Pipeline Funnel */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
                {pipelineStages.map((stage, idx) => {
                    const prevStage = idx > 0 ? pipelineStages[idx - 1] : null
                    const conversionRate = prevStage ? ((stage.deals / prevStage.deals) * 100).toFixed(0) : '100'
                    const isDecreasing = prevStage && stage.deals < prevStage.deals
                    
                    return (
                        <Card key={stage.stage}>
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-sm font-medium">{stage.stage}</CardTitle>
                                    {prevStage && (
                                        <Badge variant={isDecreasing ? "secondary" : "outline"} className="text-xs">
                                            {conversionRate}%
                                        </Badge>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div>
                                    <div className="text-2xl font-bold">{stage.deals}</div>
                                    <p className="text-xs text-muted-foreground">deals</p>
                                </div>
                                <div>
                                    <div className="text-lg font-semibold">${(stage.value / 1000000).toFixed(1)}M</div>
                                    <p className="text-xs text-muted-foreground">total value</p>
                                </div>
                                {stage.avgDays > 0 && (
                                    <div className="pt-2 border-t">
                                        <div className="flex items-center justify-between text-xs mb-1">
                                            <span className="text-muted-foreground">Avg. time</span>
                                            <span className="font-medium">{stage.avgDays} days</span>
                                        </div>
                                        <Progress value={(stage.avgDays / 30) * 100} className="h-1.5" />
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* Pipeline Velocity Chart and Recent Deals */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mb-6">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Pipeline Velocity</CardTitle>
                        <CardDescription>
                            Average days in each stage over the last 30 days
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {pipelineStages.filter(s => s.avgDays > 0).map((stage) => (
                                <div key={stage.stage} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium">{stage.stage}</span>
                                        <span className="text-muted-foreground">{stage.avgDays} days avg.</span>
                                    </div>
                                    <div className="relative h-8 bg-muted rounded-md overflow-hidden">
                                        <div 
                                            className="h-full bg-primary/20 flex items-center justify-end pr-2"
                                            style={{ width: `${(stage.avgDays / 30) * 100}%` }}
                                        >
                                            <span className="text-xs font-medium text-primary">
                                                {stage.avgDays}d
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Deals</CardTitle>
                        <CardDescription>
                            Latest activity in your pipeline
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentDeals.slice(0, 5).map((deal) => (
                                <div key={deal.id} className="space-y-1">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-sm">{deal.company}</span>
                                            <Badge variant="outline" className="text-xs">
                                                {deal.stage}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="text-xs text-muted-foreground space-y-0.5">
                                        <div>{deal.lender} · ${(deal.value / 1000000).toFixed(1)}M</div>
                                        <div className="flex items-center gap-2">
                                            <span>{deal.productType}</span>
                                            {deal.daysInStage > 0 && (
                                                <>
                                                    <span>·</span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        {deal.daysInStage} days
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Deal Stage Breakdown */}
            <div className="grid gap-4 md:grid-cols-2 mb-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Deal Stage Distribution</CardTitle>
                        <CardDescription>
                            Number of deals by stage
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {pipelineStages.map((stage) => {
                                const percentage = (stage.deals / totalDeals) * 100
                                return (
                                    <div key={stage.stage} className="space-y-1">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="font-medium">{stage.stage}</span>
                                            <span className="text-muted-foreground">
                                                {stage.deals} deals ({percentage.toFixed(0)}%)
                                            </span>
                                        </div>
                                        <Progress value={percentage} className="h-2" />
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Conversion Funnel</CardTitle>
                        <CardDescription>
                            Stage-to-stage conversion rates
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {pipelineStages.map((stage, idx) => {
                                if (idx === 0) return null
                                const prevStage = pipelineStages[idx - 1]
                                const conversion = ((stage.deals / prevStage.deals) * 100).toFixed(1)
                                return (
                                    <div key={stage.stage} className="flex items-center gap-3">
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-muted-foreground">{prevStage.stage}</span>
                                                <span className="font-medium">{conversion}%</span>
                                            </div>
                                            <Progress value={parseFloat(conversion)} className="h-2" />
                                            <div className="text-xs text-muted-foreground text-right">
                                                → {stage.stage}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Additional Stats */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium">Active Borrowers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            +2 from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium">Lenders Indexed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2,350</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            +180 from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium">Matches Created</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,203</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            +19% from last month
                        </p>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
