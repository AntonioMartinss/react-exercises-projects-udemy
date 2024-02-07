import React from 'react'
import './CarDetais.css'

const CarDetais = ({id, brand, color, engine}) => {
   
    return (
        <div className="div-cars">
            <ul>
                <li>Brand: {brand}</li>
                <li>Color: {color}</li>
                <li>Engine: {engine}</li>
                
            </ul>
        
        </div>
        
    )
}

export default CarDetais