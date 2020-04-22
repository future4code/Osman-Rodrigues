import React from 'react';
import styled from 'styled-components'

const GenContainer = styled.section`

`

const GenInput = styled.input `

`
const GenButton = styled.button` 

`

class TasksGen extends React.Component{
    state = {
        tasksArray: [],
        lastTypedTask: '',
        taskSended: false
    }

    insertTask = (event) =>{
        this.setState({lastTypedTask: event.target.value})
    }
    sendTask = () =>{
        this.state.tasksArray.push(this.state.lastTypedTask)
    
    }

    render(){
        return(
            <GenContainer>
                <GenInput onChange={this.insertTask} value={this.state.lastTypedTask} />
                <GenButton onClick={this.sendTask}>Adicionar</GenButton>
            </GenContainer>
        )
    };
}

export default TasksGen