import styled from 'styled-components';

import {Card,CardActionArea,Button} from '@material-ui/core';

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
    margin-bottom: 1%;
    width: 95%;
    height: 60%;
    text-align: center;
    overflow-y:auto;   
`;
export const SelectedTripDetailsPanel = styled(Card)`
    margin-bottom: 1%;
    width: 95%;
    height: 35%;
    text-align: center;
    
`;
export const PanelActionArea = styled(CardActionArea)`
`;
export const PanelContentArea = styled.div`
    margin: 0;
    text-align: center;  
`;
export const TripName = styled.li`
    font-size: small;
    list-style:none;
    margin: 0;
    &:active, &:hover{
        color: tomato;
    }
`;
export const TripDetail = styled.p`
    text-align: center;
    margin: 0;
`;
export const TripDetailCardTitle = styled.h3`
    text-align: center;
    margin:0;
    margin-bottom: 1%;
`;
export const TripDetailSuggest = styled.h2`
    text-align: center;
    margin:0;
    margin-top: 10px;
    margin-bottom: 1%;
    &:active{
        color: tomato;
    }
`;
export const MyTripsButton = styled(Button)`

`;