import styled from 'styled-components';
import {
    FormControl, TextField, Button,
    FormLabel, FormGroup, FormControlLabel,
    Checkbox
} from '@material-ui/core';

export const FormsPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
    font-family: Roboto;
    height: 100vh;
    width: 100vw;
`;
export const ControledForms = styled(FormControl)`
    max-width: 97%;
    
`;
export const QuestionInput = styled(TextField)`

`;
export const CheckBoxLabel = styled(FormLabel)`

`;
export const CheckBoxInput = styled(FormGroup)`

`;
export const OptionBox = styled(FormControlLabel)`

`;
export const CheckOptionBox = styled(Checkbox)`

`;
export const SendFormsButton = styled(Button)`

`;