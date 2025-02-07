import { Button } from "@/components/ui/button"
import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { useProduct } from "../api/useProduct"

export const ProductTableBody = () => {
    const { products } = useProduct()

    return (
        <TableBody>
            {products.map((product) => (
                <TableRow key={product.title}>
                    <TableCell className="font-medium">{product.title}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell className="text-right">{product.price}</TableCell>
                    <TableCell className="text-center">
                        <Link href={`/dashboard/tables/${product.id}/edit`}>
                            <Button variant="outline" size="sm">
                                Detail
                            </Button>
                        </Link>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}