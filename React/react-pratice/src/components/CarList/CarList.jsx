import React from "react";
import './CarList.css'

const CarList = () => {
    const cars = ['Fusca','Corsa','Audi','Fiat Uno','Gol','Chevette']
    return(
        <ul className="list-cars">
            {cars.map((cars, index) => {
                <li key={index}>{cars}</li>
            })}
        </ul>
    )
}

export default CarList