import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { Api } from '../../utils/api'

const Search = () => {
    const params = useParams().params
    const [apiQuery, setQuery] = useState<string[] | null>(null)
    const { tokenAuth } = useAuth()

    useEffect(() => {
        if (params) {
            const query = params.split('+')
            setQuery(query)
        }
    }, [params])

    useEffect(() => {
        (async () => {
            if (apiQuery) {
                const response = await Api.get(`/jobs/search/${apiQuery[0]}${apiQuery[1] ? `?city=${apiQuery[1]}` : ''}`, {
                    headers: {
                        Authorization: `Bearer ${tokenAuth}`
                    }
                })

                console.log(response)
            }
        })()
    }, [apiQuery])

    return (
        <div>Search</div>
    )
}

export default Search