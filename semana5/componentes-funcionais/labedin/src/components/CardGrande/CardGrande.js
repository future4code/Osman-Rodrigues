import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <a href={ props.ancora }>
                <div>
                    <h4>{ props.nome }</h4>
                    <p>{ props.descricao }</p>
                </div>
            </a>
        </div>
    )
}

export default CardGrande;