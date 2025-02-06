import { useEffect, useState } from "react";
import { type Product } from "../types/type";
import { axiosInstance } from "@/lib/axios/client";

export const useProduct = () => {
    const [ products, setProducts ] = useState<Product[]>([]);

    useEffect(() => {
        void (async function () {
            const response = await axiosInstance.get<Product[]>(
                "/products",
            )
            setProducts(response.data)
        })()
    }, [])

    return {
        products,
    }
}
