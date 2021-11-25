import React from 'react'
import { materias } from './tools/materias'

const Resultados = (event) => {

    event.preventDefault()

    //Ordenar las materias por las que mayor puntuación general tengan
    materias.sort()
    materias.map(itemM =>{
        console.log()
    })

    return (
        <div>
            
        </div>
    )
}

export default Resultados
