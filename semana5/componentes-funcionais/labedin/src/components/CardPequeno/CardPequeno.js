import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <h4>{ props.endereco }</h4>
            <span>{ props.referencia }</span>
        </div>  
    )
}

export default CardPequeno;