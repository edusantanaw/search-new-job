import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { jobs, search } from '../../services/job.services'

const Search = () => {
    const params = useParams().params
    const [apiQuery, setQuery] = useState<string[] | null>(null)
    const [data, setData] = useState<jobs[] | null>(null)

    useEffect(() => {
        if (params) {
            const query = params.split('+')
            setQuery(query)
        }
    }, [params])

    useEffect(() => {
        (async () => {
            if (apiQuery) {
                const response =
                    await search(`/jobs/search/${apiQuery[0]}`, apiQuery[1])
                setData(response)
            }
        }

        )()
    }, [apiQuery])

    return (
        <div>Search</div>
    )
}

export default Search