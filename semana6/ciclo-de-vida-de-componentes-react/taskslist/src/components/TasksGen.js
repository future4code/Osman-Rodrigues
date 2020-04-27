import React from 'react';
import styled from 'styled-components'

const GenContainer = styled.section`

`

const GenInput = styled.input `

`
const GenButton = styled.button` 

`

class TasksGen extends React.Component{
    render(){
        return(
            <GenContainer>
                <GenInput onChange={this.props.InsertTask} value={this.props.DadTaskValue} />
                <GenButton onClick={this.props.SendTask}>Adicionar</GenButton>
            </GenContainer>
        )
    };
}

export default TasksGen