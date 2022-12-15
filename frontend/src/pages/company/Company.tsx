import React, { useEffect, useState } from 'react'
import getCompany, { company } from '../../services/company.services'

const Company = () => {

    const [companyRespo, setCompany] = useState<company[] | null>(null)

    useEffect(() => {
        (async () => {
            const response = await getCompany()
            console.log(response)
            setCompany(response)
        })()
    }, [])


    return (
        <div>

        </div>
    )
}

export default Company