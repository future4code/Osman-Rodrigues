import React from 'react';
import styled from 'styled-components'

const ViewContainer = styled.section`

`
const ViewList = styled.ul`
    margin: 0;
        
    

`

class TasksView extends React.Component{
    state = {
        actualList: JSON.parse(localStorage.getItem('tasks')),
        taskSended: JSON.parse(localStorage.getItem('confirm'))
    }
    componentDidMount(){
    
    }
    componentDidUpdate(){

    }

    render(){
        //let TasksList
        /* if(this.state.taskSended === true){

            TasksList = this.state.actualList.map((task)=>{
                return <li>{task}</li>
            })
        } else{ */
            //TasksList = this.props.ListView
        //}

        return(
            
            <ViewList>
                {this.props.ListView}
            </ViewList>
        )
    };
}

export default TasksView