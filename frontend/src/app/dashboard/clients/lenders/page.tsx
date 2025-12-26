import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function LendersPage() {
    const lenders = [
        { id: '1', name: 'Hercules Capital', focus: 'Technology, SaaS, Healthcare', products: 'Venture Debt, ARR-based Loans', size: '$10M-$250M', status: 'Active' },
        { id: '2', name: 'Espresso Capital', focus: 'Software, SaaS, Recurring Revenue', products: 'Recurring Revenue Loans, ARR Financing', size: '$5M - $40M', status: 'Active' },
        { id: '3', name: 'Pacific Lending Group', focus: 'Technology, Software, Services', products: 'Venture Debt, Growth Capital', size: '$2M - $75M', status: 'Active' },
        { id: '4', name: 'Coastline Financial', focus: 'Technology, Software', products: 'Term Loans, Working Capital', size: '$1M - $30M', status: 'Active' },
        { id: '5', name: 'Urban Capital Partners', focus: 'SaaS, Software', products: 'Growth Capital, ARR Loans', size: '$4M - $60M', status: 'Active' },
    ]

    return (
        <>
            <div className="flex items-center justify-between space-y-2 mb-6">
                <h2 className="text-3xl font-bold tracking-tight">Lenders</h2>
                <Button>Add Lender</Button>
            </div>
            <div className="mb-4">
                <Input placeholder="Search lenders..." className="max-w-sm" />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Focus Industries</TableHead>
                            <TableHead>Products</TableHead>
                            <TableHead>Loan Size</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {lenders.map((lender) => (
                            <TableRow key={lender.id}>
                                <TableCell className="font-medium">{lender.name}</TableCell>
                                <TableCell>{lender.focus}</TableCell>
                                <TableCell>{lender.products}</TableCell>
                                <TableCell>{lender.size}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">{lender.status}</Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

