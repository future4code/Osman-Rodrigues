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
export const ColumnTask = styled.span`
    display: block;
`;  