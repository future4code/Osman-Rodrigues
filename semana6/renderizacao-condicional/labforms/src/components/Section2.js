import React from 'react';
import styled from 'styled-components'
import InputForms from './InputForms'

const S2Container = styled.section`
    border: 1px solid black;
    border-radius: 8px;
    min-width: 80%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: baseline;
`
const S2Title = styled.h3`

`

export class Section2 extends React.Component{
    state = {

    }

    render(){
        return(
            <S2Container>
                <S2Title> Informações do Ensino Superior</S2Title>
                <InputForms
                    Question = 'Qual Curso?'
                    Type = 'text'
                    Placeholder = 'Digite o Curso Superior'
                />
                <InputForms
                    Question = 'Qual a Unidade de Ensino'
                    Type = 'text'
                    Placeholder = 'Digite a Unidade de Ensino'
                />

            </S2Container>
        )
    }

}

export default Section2