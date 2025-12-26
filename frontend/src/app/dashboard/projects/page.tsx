import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ProjectsPage() {
    return (
        <>
            <div className="flex items-center justify-between space-y-2 mb-6">
                <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                <Button asChild>
                    <Link href="/dashboard/match">New Match</Link>
                </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Acme Software Inc</CardTitle>
                            <Badge variant="outline">Active</Badge>
                        </div>
                        <CardDescription>SaaS growth capital project</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Loan Amount</span>
                                <span className="font-medium">$5.0M</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Location</span>
                                <span className="font-medium">Austin, TX</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Matches</span>
                                <span className="font-medium">12 lenders</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Beacon Hill Analytics</CardTitle>
                            <Badge variant="outline">New</Badge>
                        </div>
                        <CardDescription>Recurring revenue financing</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Loan Amount</span>
                                <span className="font-medium">$12.0M</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Location</span>
                                <span className="font-medium">Boston, MA</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Matches</span>
                                <span className="font-medium">8 lenders</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Summit Ventures</CardTitle>
                            <Badge variant="outline">Evaluating</Badge>
                        </div>
                        <CardDescription>Venture debt financing</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Loan Amount</span>
                                <span className="font-medium">$8.5M</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Location</span>
                                <span className="font-medium">Denver, CO</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Matches</span>
                                <span className="font-medium">15 lenders</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

