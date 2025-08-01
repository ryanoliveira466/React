import React from "react";
import './Title.css'
// Component do título principal
const Title = ({name}) => {
    return <h1 className="title"> Bem vindo, {name}</h1>
}

export default Title