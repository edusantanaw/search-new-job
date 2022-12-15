import React, { useEffect, useState } from 'react'
import { ListJobs } from '../../components/ListJobs'
import RecentSearch from '../../components/RecentSearch'
import SearchBar from '../../components/SearchBar'
import { jobs, loadRecentJobs } from '../../services/job.services'
import { Container } from './home.styles'

const Home = () => {
    const [vacancys, setVacancys] = useState<jobs[] | null>(null)

    const [showRecents, setShowRecents] = useState<boolean>(false)

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
                <h2 onClick={() => setShowRecents(true)} className={showRecents ? "decorate" : ""}>Vagas recentes</h2>
                <h2 onClick={() => setShowRecents(false)} className={!showRecents ? "decorate" : ""}>Buscas recentes</h2>
            </div>
            {showRecents ?
                <ListJobs vacancys={vacancys}
                /> : <RecentSearch />}
        </Container>
    )
}

export default Home