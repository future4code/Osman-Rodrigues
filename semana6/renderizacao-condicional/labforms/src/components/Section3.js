import React from 'react';
import styled from 'styled-components'
import InputFomrs from './InputForms'
import SelectForms from './SelectForms'

const S3Container = styled.section`
    border: 1px solid black;
    border-radius: 8px;
    min-width: 80%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: baseline;
`
const S3Title = styled.h3`

`

export class Section3 extends React.Component{
    state = {
        Quest1Value: '',
        Quest2Value: ''

    }
    onChangeQ1 = (event) =>{
        this.setState({Quest1Value: event.target.value})
    }
    onChangeQ2 = (event)=>{
        this.setState({Quest2Value: event.target.value})
    }
    
    render(){
        return(
            <S3Container>
                <S3Title>Informações Gerais de Ensino</S3Title>
                <InputFomrs
                    Question='Porquê você não concluiu Curso Superior?'
                    OnChangeInput = {this.onChangeQ1}
                    InputValue = {this.state.Quest1Value}
                    Type='text'
                    Placeholder='Digite sua justificativa'
                />
                <SelectForms
                    Quest='Selecione abaixo curso complementar caso tenha realizado. Caso contrário, selecione "nenhum".'
                    OnChangeSelect = {this.onChangeQ2}
                    SelectValue = {this.state.Quest2Value}
                    Option1 = 'Nenhum'
                    Option2 = 'Curso Técnico'
                    Option3 = 'Curso de Inglês'
                
                />

            </S3Container>
        )
    }

}

export default Section3