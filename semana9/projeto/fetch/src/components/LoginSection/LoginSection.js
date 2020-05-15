import React, {useState, useEffect} from 'react';
import {
  LoginContainer, MainTitle,
  UserPasswordInput, UserNameInput,
  LoginButton
} from './styles';

let userName = '';
let userPassword = 0;

export const sendData=()=>{
  
  return(
    {
    userName: userName,
    userPassword: userPassword,
    }
  )
}

function LoginSection(props) {
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');

  const onChangeInputName=(e)=>{
    setInputNameValue(e.target.value)
  
  };
  
  const onChangeInputPassword=(e)=>{
    setInputPasswordValue(e.target.value)
  };

  useEffect(()=>{

    userName = inputNameValue;
    userPassword = inputPasswordValue;

  }, [inputNameValue, inputPasswordValue])

  return (

    <LoginContainer>
      <MainTitle>FETSH</MainTitle>

      <UserNameInput
      type="text"
      variant="outlined"
      label="Nome de Usuário"
      color="secondary"
      defaultValue={inputNameValue}
      onChange={onChangeInputName}
      />

      <UserPasswordInput
      variant="outlined"
      label="Senha"
      color="secondary"
      margin="normal"
      defaultValue={inputPasswordValue}
      onChange={onChangeInputPassword}
      />

      <LoginButton
      variant="contained"
      color="secondary"
      onClick={props.OnClickLogin}
      >Entrar</LoginButton>

    </LoginContainer>
  );
}

export default LoginSection;