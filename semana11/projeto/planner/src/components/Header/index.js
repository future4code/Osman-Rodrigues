import React from 'react';

import {
    HeaderContainer, HeaderTitle, TaskInput, 
    CreateTaskButton, TasksDropdown, DropdownOption,
    CreateTaskBar
} from './styles';

function Header(){

    return(
        <HeaderContainer>
            <HeaderTitle>Planner</HeaderTitle>

            <CreateTaskBar>
                <TaskInput />
                <CreateTaskButton>Criar tarefa</CreateTaskButton>
            </CreateTaskBar>
            
            <TasksDropdown>
                <DropdownOption>Selecione um filtro</DropdownOption>
                <DropdownOption>Realizadas</DropdownOption>
                <DropdownOption>Pendentes</DropdownOption>
            </TasksDropdown>

        </HeaderContainer>
    )
}
export default Header