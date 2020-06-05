import React,{useState} from 'react';
import axios from 'axios';

import {
    HeaderContainer, HeaderTitle, TaskInput, 
    CreateTaskButton, TasksDropdown, DropdownOption,
    CreateTaskBar, TaskInputLabel
} from './styles';

function Header(){

    const [createdTask, setCreatedTask]= useState({
        text: '',
        day: '',
    });
    const [weekDays] = useState([
        'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'
    ]);

    const handleInputChange =(e)=>{
        const { name, value} = e.target;

        setCreatedTask({... createdTask, [name]: value})
    };
    const handleSubmit=async(e)=>{
        e.preventDefault()

        if(createdTask.day.trim() === ''){
            window.alert('Selecione um dia para a tarefa!')
        }else{
            try{
                const response = await axios.
                post(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-osman`,
                {text:createdTask.text, day: createdTask.day.toLowerCase()},
                );

                response.data === 'Created' && window.alert('Tarefa criada!');
                window.location.reload();
            }catch(e){
                window.alert('Algo deu errado! Tarefa não foi criada.')
            }
        }
    };

    return(
        <HeaderContainer>
            <HeaderTitle>Planner</HeaderTitle>

            <CreateTaskBar onSubmit={handleSubmit}>
                <TaskInputLabel>Crie uma tarefa</TaskInputLabel>
                <TaskInput required onChange={handleInputChange} value={createdTask.text} name='text' type='text' />
                <TasksDropdown required onChange={handleInputChange} name='day' >
                    <DropdownOption>Selecione o dia</DropdownOption>
                    {
                        weekDays.map(day=>(
                            <DropdownOption key={day}>{day}</DropdownOption>
                        ))
                    }
                </TasksDropdown>
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