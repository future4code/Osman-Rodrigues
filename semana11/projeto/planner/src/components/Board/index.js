import React,{useEffect, useState} from 'react';
import axios from 'axios';

import {
    BoardContainer, DayColumn, ColumnTitle,
    Task, TaskBox, ActionTask, TaskActionBar,
} from './styles';

function Board(){

    const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-osman';

    const [tasksList, setTasksList] = useState([]);

    const handleTaskClick=(e)=>{
        const element = document.getElementById(e.target.id)

        element.style.textDecoration === '' ? 
        element.style.textDecoration = 'line-through':
        element.style.textDecoration = ''
    };
    const handleEditTask =async(e)=>{
        const dataDay = e.target.getAttribute('data-day');
        const dataText = e.target.value;
        
        const askText = window.prompt('Nova descrição da tarefa (deixe em branco se não quiser alterar)');
        const askDay = window.prompt('Novo dia (deixe em branco se não quiser alterar)');

        window.alert('Aguarde confirmação...')

        if(askDay === null && askText === null){
            window.alert('Alteração cancelada.')
        }else if( askText=== null || askDay === null){
            try{
                const response = await axios
                .put(`${baseUrl}/${e.target.id}`, 
                {
                    text: askText === null || askText.trim() === '' ? dataText : askText,
                    day: askDay === null || askDay.trim() === '' ? dataDay : askDay,
                });
                console.log(response)
                window.alert('Tarefa alterada com sucesso!');
                window.location.reload();
            }catch(e){
                window.alert('Algo deu errado! Não foi possível fazer a alteração.');
            };
        }else{
            try{
                const response = await axios
                .put(`${baseUrl}/${e.target.id}`,{text:askText, day:askDay});
                console.log(response)
                window.alert('Tarefa alterada com sucesso!');
                window.location.reload();
            }catch(e){
                window.alert('Algo deu errado! Não foi possível fazer a alteração.');
            };
        };
    };
    const handleDeleteTask=async(e)=>{
        console.log(e.target.id)

        const confirmDelete = window.confirm('Deseja excluir esta tarefa?');

        if(confirmDelete === true){

            try{
                const response = await axios
                .delete(`${baseUrl}/${e.target.id}`);

                window.alert('Tarefa excluída!');
                window.location.reload();
            }catch(e){
                window.alert('Algo deu errado! Não foi possível excluir a tarefa.')
            };
        }else{
            window.alert('Exclusão cancelada.')
            
        };
    };
    const mountTasks=(day)=>{
        if(tasksList.length !== 0){
            const dayTasks = tasksList.filter(task=> task.day === day)
            return(
                dayTasks.map(task=>{
                    return(
                        <TaskBox>
                            <Task
                                title='Clique para marcar ou desmarcar a tarefa como conluída'
                                value={false}
                                onClick={handleTaskClick}
                                type='checkbox' id={task.id}
                                key={task.id}
                            >
                                {task.text}
                            </Task>
                            
                            <TaskActionBar>
                                <ActionTask 
                                    onClick={handleEditTask} 
                                    id={task.id} 
                                    title='Editar tarefa'
                                    data-day={task.day}
                                    value={task.text}
                                >
                                    e
                                </ActionTask>

                                <ActionTask 
                                    onClick={handleDeleteTask}
                                    id={task.id} 
                                    title='Deletar tarefa'
                                >
                                    x
                                </ActionTask>
                            </TaskActionBar>
                        </TaskBox>
                    )
                })
            )
        }
    };
    useEffect(()=>{
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-osman`)
        .then(response=>setTasksList(response.data))
        .catch(err=> window.alert('Não foi possível carregar o quadro de tarefas!'))
    },[]);

    return(
        <BoardContainer>
            <DayColumn name='segunda'>
                <ColumnTitle>Segunda-feira</ColumnTitle>

                {mountTasks('segunda')}
            </DayColumn>

            <DayColumn name='terça'>
                <ColumnTitle>Terça-feira</ColumnTitle>

                {mountTasks('terça')}
            </DayColumn>

            <DayColumn name='quarta'>
                <ColumnTitle>Quarta-feira</ColumnTitle>

                {mountTasks('quarta')}
            </DayColumn>

            <DayColumn name='quita'>
                <ColumnTitle>Quinta-feira</ColumnTitle>

                {mountTasks('quinta')}
            </DayColumn>

            <DayColumn name='sexta'>
                <ColumnTitle>Sexta-feira</ColumnTitle>

                {mountTasks('sexta')}
            </DayColumn>

            <DayColumn name='sábado'>
                <ColumnTitle>Sábado</ColumnTitle>

                {mountTasks('sábado')}
            </DayColumn>

            <DayColumn name='domingo'>
                <ColumnTitle>Domingo</ColumnTitle>

                {mountTasks('domingo')}
            </DayColumn>
        </BoardContainer>
    )
}
export default Board