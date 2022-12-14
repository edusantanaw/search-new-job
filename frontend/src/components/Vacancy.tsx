import React from 'react'
import { jobs } from '../services/job.services'
import { VancacyContainer } from './vacancy.styles'

export const Vacancy = ({ job, handleDesc }: { job: jobs, handleDesc: (job: jobs) => void }) => {
    return (
        <VancacyContainer onClick={() => handleDesc(job)}>
            <h3><span>Vaga para:</span> {job.vacancyFor}</h3>
            <p>Empresa: {job.name}</p>
            <p>Cidade: {job.city}</p>
            <span> Salario R$: {job.salary}</span>
        </VancacyContainer>
    )
}
