import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ListJobs } from '../../components/ListJobs'
import SearchBar from '../../components/SearchBar'
import { jobs, search } from '../../services/job.services'
import { Container } from './search.style'

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
                    await search(apiQuery)
                console.log(response)
                setData(response)
            }
        }

        )()
    }, [apiQuery])



    return (
        <Container>
            <SearchBar />
            {data && <ListJobs vacancys={data} />}
        </Container>
    )
}

export default Search