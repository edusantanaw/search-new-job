import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { applyForJob, jobs } from '../services/job.services'
import { Container, List } from './list.styles'
import { Vacancy } from './Vacancy'
interface props {
    vacancys: jobs[] | null
}

export const ListJobs = ({ vacancys }: props) => {
    const { userAuth } = useAuth()
    const [actualDescription, setActual] = useState<jobs[] | null>(vacancys ? [vacancys[0]] : null)

    function handleDesc(job: jobs) {
        setActual([job])
    }

    async function handleApply(vacancyId: string) {
        if (userAuth) {
            const response = await applyForJob(userAuth.id, vacancyId)
        }
    }

    return (
        <Container className='content'>
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
                    <button onClick={() => handleApply(desc.id)}>Candidatar-se</button>
                </div>
            ))}
        </Container>
    )
}
