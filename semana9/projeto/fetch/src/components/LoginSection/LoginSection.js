import React from 'react';
import styled from 'styled-components';

import {
  LoginContainer, MainTitle,
  UserPasswordInput, UserNameInput,
  LoginButton
} from './styles'

function LoginSection() {
  return (
    <LoginContainer>
      <MainTitle>FETSH</MainTitle>

      <UserNameInput
      type="text"
      variant="outlined"
      label="Nome de Usuário"
      color="secondary"
      />

      <UserPasswordInput
      variant="outlined"
      label="Senha"
      color="secondary"
      margin="normal"
      />

      <LoginButton
      variant="contained"
      color="secondary"
      >Entrar</LoginButton>

    </LoginContainer>
  );
}

export default LoginSection;