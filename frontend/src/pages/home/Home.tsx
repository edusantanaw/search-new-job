import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar'
import { Vacancy } from '../../components/Vacancy'
import { jobs, loadRecentJobs } from '../../services/job.services'
import { Container, List } from './home.styles'



const Home = () => {

    const [vacancys, setVacancys] = useState<jobs[] | null>(null)
    const [actualDescription, setActual] = useState<jobs[] | null>(null)

    useEffect(() => {
        (async () => {
            const data = await loadRecentJobs()
            setVacancys(data)
            setActual([data[0]])
        })()
    }, [])

    function handleDesc(job: jobs) {
        setActual([job])
    }

    return (
        <Container>
            <SearchBar />
            <div className='header'>
                <h2>Vagas recentes</h2>
                <h2>Buscas recentes</h2>
            </div>
            <div className='content'>
                <List>
                    {vacancys && vacancys.map((job, i) => (
                        <Vacancy handleDesc={handleDesc} job={job} key={i} />
                    ))}
                </List>
                {actualDescription && actualDescription.map((desc) => (
                    <div className='details'>
                        <h2>{desc.vacancyFor}</h2>
                        <p>{desc.name}</p>
                        <p>{desc.city}</p>
                        <p>{desc.salary}</p>
                        <p>{desc.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Home