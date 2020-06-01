import styled from 'styled-components'

import TextField from '@material-ui/core/TextField/TextField'
import Button from '@material-ui/core/Button/Button'

export const LoginContainer = styled.section`
  background-color: #A30000;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`
export const MainTitle = styled.h1`
    font-family: Playfair Display;
    color: #f5f5f5;
    font-size: 120px;
    
`
export const UserNameInput = styled(TextField)`
    padding: #f5f5f5;
      
`
export const UserPasswordInput = styled(TextField)`

`
export const LoginButton = styled(Button)`
    
`