import { useState, useEffect } from 'react'
import Signin from './Signin'
import Signup from './Signup'
import { Container } from './styles/styles'
import authimage from '../../assets/auth_image.jpg'

const Index = () => {

    const [actual, setActual] = useState(<Signin handleChange={handleChange} />)
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        show ? setActual(<Signup handleChange={handleChange} />) : setActual(<Signin handleChange={handleChange} />)
    }, [show])

    function handleChange() {
        show ? setShow(false) : setShow(true)
    }

    return (
        <Container>
            {actual}
            <img src={authimage} alt="tecnologies" />
        </Container>

    )
}


export default Index