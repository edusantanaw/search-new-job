import React, { useEffect, useMemo, useState } from 'react'
import SearchBar from '../../components/SearchBar'
import { jobs, loadRecentJobs } from '../../services/job.services'
import { Container } from './home.styles'



const Home = () => {

    const [vacancys, setVacancys] = useState<jobs[] | null>(null)

    useEffect(() => {
        (async () => {
            const data = await loadRecentJobs()
            setVacancys(data)
        })()
    }, [])

    return (
        <Container>
            <SearchBar />
            <div className='header'>
                <h2>Vagas recentes</h2>
                <h2>Buscas recentes</h2>
            </div>
            {vacancys && vacancys.map((job, i) => (
                <div key={i}>
                    <h3>{job.vacancyFor}</h3>
                </div>
            ))}
        </Container>
    )
}

export default Home