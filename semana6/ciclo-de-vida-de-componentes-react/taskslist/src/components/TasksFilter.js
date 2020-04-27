import React from 'react';
import styled from 'styled-components'
import TasksView from './TasksView'

const FilterContainer = styled.section `

`
const FilterTitle = styled.h4`

`
const FilterSelect = styled.select` 

`
const FilterOption = styled.option` 

`

class TasksFilter extends React.Component{
    state = {

        filteredArray: [],
        filterValue: ''
    }
    
    filterSet = (event) =>{
        this.setState({filterValue: event.target.value})
        
    }
    render(){
        console.log(this.state.filterValue)

        let FilteredList = ()=>{
            if(this.state.filterValue === 'Pendentes'){
                
            }
        }

        return(
            <FilterContainer>
                <FilterTitle></FilterTitle>

                <FilterSelect onChange={this.filterSet} value={this.state.filterValue}>
                    <FilterOption value={'Nenhum'}>Nenhum</FilterOption>
                    <FilterOption value={'Pendentes'}>Pendentes</FilterOption>
                    <FilterOption value={'Completas'}>Completas</FilterOption>
                </FilterSelect>

                <TasksView

                    

                />

            </FilterContainer>
        )
    };
}

export default TasksFilter