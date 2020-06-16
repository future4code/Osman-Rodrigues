import styled from 'styled-components';

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    width: 100%;
    height: 85%;
`;
export const DayColumn = styled.div`
    border: 1px solid black;
    width: 14.2%;
    height: 100%;
    overflow-y: auto; 
`;
export const ColumnTitle = styled.h3`

`;
export const TaskBox = styled.div`
    width:95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const TaskActionBar = styled.div`
    
`;
export const Task = styled.span`   
   cursor: pointer;
`;
export const ActionTask = styled.option`
    font-style: italic;
    list-style:none;
    display: inline;
    cursor: help;
    &:hover{
        color: #ff0000; 
    }
    &:active{
        color: #0000ff;
    }
`;