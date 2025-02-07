import { useEffect, useState } from "react"
import { type Product } from "../types/type"
import { useParams } from "next/navigation"
import { axiosInstance } from "@/lib/axios/client"

export const useProductID = () => {
    const params = useParams()
    const id = typeof params.id === 'string' ? params.id : Array.isArray(params.id) ? params.id[0] : undefined
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        if (!id) return // Guard clause if id is undefined

        void (async function () {
            try {
                const response = await axiosInstance.get<Product>(
                    `/products/${id}`,
                )
                setProduct(response.data)
            } catch (error) {
                console.error('Error fetching product:', error)
            }
        })()
    }, [id])

    return {
        product,
    }
}


// import { useEffect, useState } from "react"
// import { type Product } from "../types/type"
// import { useParams } from "next/navigation"
// import { axiosInstance } from "@/lib/axios/client"

// export const useProductID = () => {
//     const { id } = useParams()
//     const [product, setProduct] = useState<Product | null>(null)

//     useEffect(() => {
//         void (async function () {
//             try {
//                 const response = await axiosInstance.get<Product>(
//                     `/products/${id}`,
//                 )
//                 setProduct(response.data)
//             } catch (error) {
//                 console.error('Error fetching product:', error)
//             }
//         })()
//     }, [id])

//     return {
//         product,
//     }
// }
