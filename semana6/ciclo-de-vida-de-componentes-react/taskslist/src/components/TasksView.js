import React from 'react';
import styled from 'styled-components'

const ViewContainer = styled.section`

`
const ViewList = styled.ul`

`

class TasksView extends React.Component{
    state = {

    }
    render(){
        return(
            <ViewContainer>
                <ViewList>
                    {this.props.FilteredList}
                </ViewList>

            </ViewContainer>
        )
    };
}

export default TasksView