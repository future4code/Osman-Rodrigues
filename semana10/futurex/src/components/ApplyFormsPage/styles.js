import styled from 'styled-components';
import {
    FormControl, TextField, Button,
    FormLabel, FormGroup, FormControlLabel,
    Checkbox, Select, MenuItem, InputLabel
} from '@material-ui/core';

export const Logo = styled.img`
    max-width: 406px;
    
`;
export const FormsPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: Roboto;
    height: 100vh;
    width: 100vw;
    overflow-x:hidden;
    
`;
export const ControledForms = styled(FormControl)`
    max-width: 97%;
`;
export const QuestionInput = styled(TextField)`

`;
export const SelectCountry = styled(Select)`

`;
export const CountryOption = styled(MenuItem)`

`;
export const SelectLabel = styled(InputLabel)`

`;
export const CheckBoxLabel = styled(FormLabel)`

`;
export const CheckBoxInput = styled(FormGroup)`

`;
export const OptionBox = styled(FormControlLabel)`

`;
export const CheckOptionBox = styled(Checkbox)`

`;