import styled from 'styled-components';

import {Card,CardActionArea,CardHeader,Button} from '@material-ui/core';

export const MyTripsPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    font-family: Roboto;
    height: 100vh;
    width: 100vw;
`;
export const SelectableTripsPanel = styled(Card)`
    border: 1px solid black;
    margin-bottom: 1%;
    width: 80%;
    height: 60%;
    
    
`;
export const SelectedTripDetailsPanel = styled(Card)`
    border: 1px solid black;
    margin-bottom: 1%;
    width: 80%;
    height: 35%;
`;
export const PanelHeader = styled(CardHeader)`

`;
export const PanelActionArea = styled(CardActionArea)`

`;
export const MyTripsButton = styled(Button)`

`;
