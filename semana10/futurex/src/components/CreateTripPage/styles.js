import styled from 'styled-components';

import {
    FormControl,TextField,Button, Select, MenuItem, 
    InputLabel
} from '@material-ui/core';

export const CreateTripPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    font-family: Roboto;
    height: 100vh;
    width: 100vw;
`;

export const ControledCreateTripForms = styled(FormControl)`
    
`;
export const CreateTripInput = styled(TextField)`
    
`;
export const CreateTripButton = styled(Button)`

`;
export const SelectDestiny = styled(Select)`

`;
export const DestinyOption = styled(MenuItem)`

`;
export const SelectLabel = styled(InputLabel)`

`;

export const SubmitButton = styled.button`
    font-size: small;
    background: none;
    border: 1px solid #bbbbbb;
    border-radius: 4px;
    color: solid black;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 0px;
    //cursor: pointer;
    &:hover{
        background: #eeeeee;
    };
    &:active{
        background: #cccccc;
    }
`;

