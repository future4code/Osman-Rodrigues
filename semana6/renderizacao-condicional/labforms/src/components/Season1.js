import React from 'react';
import styled from 'styled-components'
import InputForms from './InputForms'
import SelectForms from './SelectForms'

const S1Container = styled.section`
    border: 1px solid black;
    border-radius: 8px;
    width: 80%;
    min-height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const S1Title = styled.h3`

`

export class Season1 extends React.Component{
    state = {

    }

    render(){
        return(
            <S1Container>
                <S1Title>Etapa 1 - Dados Gerais</S1Title>

                <InputForms
                    Question='1. Qual o seu nome?'
                    Type='text'
                    Placeholder='Digite seu nome completo'

                />
                <InputForms
                    Question='2. Qual a sua idade?'
                    Type='number'
                    Placeholder='Digite sua idade'

                />
                <InputForms
                    Question='3. Qual o seu e-mail?'
                    Type='email'
                    Placeholder='Digite seu e-mail'

                />

                <SelectForms
                    Quest = '4. Qual a sua escolaridade?'
                    Option1 ='Ensino Médio Incompleto'
                    Option2 ='Ensino Médio Completo'
                    Option3 = 'Ensino Superior Incompleto'
                    Option4 = 'Ensino Superior Completo'

                />
                
            </S1Container>
        )
    }

}

export default Season1