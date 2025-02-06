import {  TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const ProductTableHeader = () => {
    return (
        <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                </TableRow>
        </TableHeader>
    )
}