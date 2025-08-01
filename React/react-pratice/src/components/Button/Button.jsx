import React from "react";
import './Button.css'

const Button = () => {
    const handleClick = () => {
        alert('Você clicou no botão')
    }
    return(
        <button className="button" onClick={handleClick}></button>
    )
}

export default Button