import styled from 'styled-components';
import {Card,Button} from '@material-ui/core';

export const ApplicantsPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    font-family: Roboto;
    height: 100vh;
    width: 100vw;
`;
export const ApplicantsPanel = styled(Card)`
    border: 1px solid black;
    margin-bottom: 1%;
    width: 95%;
    height: 60%;
    text-align: center;
    overflow-y:auto;   
`;
export const ApplicantDetailsPanel = styled(Card)`
    border: 1px solid black;
    margin-bottom: 1%;
    width: 95%;
    height: 35%;
    text-align: center;
`;
export const TripName = styled.h2`
    margin: 0;
`;
export const ApplicantName = styled.h2`
    margin: 0;
`;
export const ApplicantDetail = styled.p`
    text-align: center;
    margin: 0;
`;
export const ApplicantDetailCardTitle = styled.h3`
    text-align: center;
    margin:0;
    margin-bottom: 1%;
`;
export const ApplicantDetailSuggest = styled.h5`
    text-align: center;
    margin:0;
    margin-top: 10px;
    margin-bottom: 1%;
`;
export const ApplicantsButton = styled(Button)`

`;