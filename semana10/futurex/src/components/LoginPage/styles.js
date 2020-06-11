import styled from 'styled-components'
import {FormControl,TextField,Button} from '@material-ui/core'

export const LoginPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: Roboto;
    height: 100vh;
    width: 100vw;
`;

export const ControledLogin = styled(FormControl)`
`;
export const LoginInput = styled(TextField)`

`;
export const LoginButton = styled(Button)`

`;