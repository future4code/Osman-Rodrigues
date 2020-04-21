import React from 'react';
import styled from 'styled-components'
import InputForms from './InputForms'
import SelectForms from './SelectForms'

const S1Container = styled.section`
    border: 1px solid black;
    border-radius: 8px;
    min-width: 80%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: baseline;
`
const S1Title = styled.h3`

`

export class Section1 extends React.Component{
    state = {
        Quest1Value: '',
        Quest2Value: '',
        Quest3Value: '',
        Quest4Value: ''
    }
    onChangeQ1 = (event) =>{
        this.setState({Quest1Value: event.target.value})

    }
    onChangeQ2 = (event) =>{
        this.setState({Quest2Value: event.target.value})
    }
    onChangeQ3 = (event) =>{
        this.setState({Quest3Value: event.target.value})

    }
    onChangeQ4 = (event)=>{
        this.setState({Quest4Value: event.target.value})
    }

    render(){
        return(
            
            <S1Container>
                
                <S1Title>Dados Gerais</S1Title>

                <InputForms
                    Question='1. Qual o seu nome?'
                    OnChangeInput = {this.onChangeQ1}
                    InputValue = {this.state.Quest1Value}
                    Type='text'
                    Placeholder='Digite seu nome completo'

                />
                <InputForms
                    Question='2. Qual a sua idade?'
                    OnChangeInput = {this.onChangeQ2}
                    InputValue = {this.state.Quest2Value}
                    Type='number'
                    Placeholder='Digite sua idade'

                />
                <InputForms
                    Question='3. Qual o seu e-mail?'
                    OnChangeInput = {this.onChangeQ3}
                    InputValue = {this.state.Quest3Value}
                    Type='email'
                    Placeholder='Digite seu e-mail'

                />
                <SelectForms
                    Quest = '4. Qual a sua escolaridade?'
                    OnChangeSelect = {this.onChangeQ4}
                    SelectValue = {this.state.Quest4Value}
                    HeadOption = 'Selecione a escolaridade'
                    Option1 ='Ensino Médio Incompleto'
                    Option2 ='Ensino Médio Completo'
                    Option3 = 'Ensino Superior Incompleto'
                    Option4 = 'Ensino Superior Completo' 

                />
                
            </S1Container>
        )
    }

}

export default Section1