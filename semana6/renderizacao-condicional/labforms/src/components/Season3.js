import React from 'react';
import styled from 'styled-components'
import InputFomrs from './InputForms'
import SelectForms from './SelectForms'

const S3Container = styled.section`
    border: 1px solid black;
    border-radius: 8px;
    width: 80%;
    min-height: 80%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
`
const S3Title = styled.h3`

`

export class Season3 extends React.Component{
    state = {

    }

    render(){
        return(
            <S3Container>
                <S3Title>Informações Gerais de Ensino</S3Title>
                <InputFomrs
                    Question='Porquê você não concluiu Curso Superior?'
                    Type='text'
                    Placeholder='Digite sua justificativa'
                />
                <SelectForms
                    Quest='Selecione abaixo curso complementar caso tenha realizado. Caso contrário, selecione "nenhum".'
                    Option1 = 'Nenhum'
                    Option2 = 'Curso Técnico'
                    Option3 = 'Curso de Inglês'
                
                />

            </S3Container>
        )
    }

}

export default Season3