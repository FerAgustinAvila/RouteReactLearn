import React, { useState, useEffect } from 'react'

const Base = () => {

    const[ name, setName ] = useState('Fernando')

    useEffect(() => {
        setTimeout(() => {
            setName('Agustin')
        }, 3000)
    })

    return (
        <div className="text-center">
            <h1>
                Pagina Base
            </h1>
            <p> { name } </p>
        </div>
    )
}

export default Base
