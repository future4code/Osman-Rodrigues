import React from 'react';
import styled from 'styled-components'

const InputArea = styled.div `
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-bottom: 15px;
`
const InputLabel = styled.label` 

`
const InputBox = styled.input`

`

export class InputForms extends React.Component{
    state = {

    }

    render(){
        return(
            <InputArea>
                <InputLabel>{this.props.Question}</InputLabel>
                <InputBox onChange={this.props.OnChangeInput} value={this.props.InputValue} type={this.props.Type} placeholder={this.props.Placeholder}/>
            </InputArea> 
        )
    }
}

export default InputForms