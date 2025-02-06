import {
    Table as TableComponent,
    TableCaption,
    TableCell,
    TableFooter,
    TableRow,
} from "@/components/ui/table"
import { ProductTableHeader } from "./ProductTableHeader"
import { ProductTableBody } from "./ProductTableBody"

export function Table() {

    return (
        <TableComponent>
            <TableCaption>A list of products.</TableCaption>
                <ProductTableHeader />
                <ProductTableBody />
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={4}>Total</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
            </TableFooter>
        </TableComponent>
    )
}