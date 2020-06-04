import React from 'react';

import {
    BoardContainer, DayColumn, ColumnTitle,
    ColumnTask
} from './styles';

function Board(){
    return(
        <BoardContainer>
            <DayColumn name='monday'>
                <ColumnTitle>Segunda-feira</ColumnTitle>

                <ColumnTask>Correr na praia</ColumnTask>
                <ColumnTask>Correr na praia</ColumnTask>
                <ColumnTask>Correr na praia</ColumnTask>
                <ColumnTask>Correr na praia</ColumnTask>
            </DayColumn>

            <DayColumn name='tuesday'>
                <ColumnTitle>Terça-feira</ColumnTitle>
            </DayColumn>

            <DayColumn name='wednesday'>
                <ColumnTitle>Quarta-feira</ColumnTitle>
            </DayColumn>

            <DayColumn name='thursday'>
                <ColumnTitle>Quinta-feira</ColumnTitle>
            </DayColumn>

            <DayColumn name='friday'>
                <ColumnTitle>Sexta-feira</ColumnTitle>
            </DayColumn>

            <DayColumn name='saturday'>
                <ColumnTitle>Sábado</ColumnTitle>
            </DayColumn>

            <DayColumn name='sunday'>
                <ColumnTitle>Domingo</ColumnTitle>
            </DayColumn>
        </BoardContainer>
    )
}
export default Board