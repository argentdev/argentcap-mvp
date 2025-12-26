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
import { MOCK_ENTITIES, MOCK_BORROWER_DETAILS } from "@/lib/mock-data"

export default function BorrowersPage() {
    const borrowers = MOCK_ENTITIES
        .filter(e => e.type === 'borrower')
        .map(entity => {
            const details = MOCK_BORROWER_DETAILS[entity.id]
            return {
                id: entity.id,
                name: entity.name,
                status: entity.status,
                email: entity.email,
                loanAmount: details?.loanAmount ? `$${(details.loanAmount / 1000000).toFixed(1)}M` : 'N/A',
                location: details?.location || 'N/A',
                projectType: details?.projectType || 'N/A',
            }
        })

    return (
        <>
            <div className="flex items-center justify-between space-y-2 mb-6">
                <h2 className="text-3xl font-bold tracking-tight">Borrowers</h2>
                <Button>Add Borrower</Button>
            </div>
            <div className="mb-4">
                <Input placeholder="Search borrowers..." className="max-w-sm" />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Loan Amount</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Project Type</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {borrowers.map((borrower) => (
                            <TableRow key={borrower.id}>
                                <TableCell className="font-medium">{borrower.name}</TableCell>
                                <TableCell>{borrower.email || 'N/A'}</TableCell>
                                <TableCell>{borrower.loanAmount}</TableCell>
                                <TableCell>{borrower.location}</TableCell>
                                <TableCell>{borrower.projectType}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">{borrower.status}</Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

