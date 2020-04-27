import React from 'react';
import styled from 'styled-components'

const SubmitFormsButton = styled.button`

`

export class SendForms extends React.Component{
    state = {

    }

    render(){
        return(
            <SubmitFormsButton onClick={this.props.OnSubmit}>{this.props.ButtonName}</SubmitFormsButton>
        )
    }

}

export default SendForms