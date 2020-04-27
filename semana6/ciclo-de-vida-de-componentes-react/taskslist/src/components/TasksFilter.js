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
        //generatedTasks: [],
        filteredArray: [],
        filterValue: 'Nenhum',
        filterChanged: false
        
    }

    filterSet = (event) =>{
        this.setState({filterValue: event.target.value})
        this.state.filterValue === 'Nenhum' ? 
        this.setState({filterChanged: false}) : this.setState({filterChanged: true}) 
    }

    componentDidMount(){
    
        //console.log('filtro montado')
    }
    componentDidUpdate(){
        
        switch(this.state.filterValue){
            
            case 'Pendentes':
                //console.log(this.state.filteredArray)
                //console.log('Case1')
                
                break;
            case 'Completas':
                
                //console.log('Case2')
                
                break;
            default:
                //console.log('Case nenhum')
                
        }

        //console.log('filtro atualizado')

    }
       
    render(){
        //console.log(this.state.filterValue)
        //console.log(this.state.filterChanged)

        return(
            <FilterContainer>
                <FilterTitle>Filtra Tarefas</FilterTitle>

                <FilterSelect onChange={this.filterSet} value={this.state.filterValue}>
                    <FilterOption value={'Nenhum'}>Nenhum</FilterOption>
                    <FilterOption value={'Pendentes'}>Pendentes</FilterOption>
                    <FilterOption value={'Completas'}>Completas</FilterOption>
                </FilterSelect>

            </FilterContainer>
        )
    };
}

export default TasksFilter