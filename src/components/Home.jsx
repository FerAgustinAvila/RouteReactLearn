import React from 'react'
import { useParams } from 'react-router-dom'

const Home = () => {

    const { name, lastname } = useParams()
    return (
        <div className="text-center">
            <h1>
                Pagina de Inicio
            </h1>
            <p>
                { name } - { lastname }
            </p>
        </div>
    )
}

export default Home
