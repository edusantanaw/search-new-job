import { useEffect, useState } from "react";
import { Api } from "../utils/api";
import { headers } from "../utils/headers";


export default function usePagination<T>(fetchData: () => Promise<T[]>, dependeces?: any) {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)


    useEffect(() => {


    }, [dependeces])



    return {
        data,
        loading,
        error
    }

}