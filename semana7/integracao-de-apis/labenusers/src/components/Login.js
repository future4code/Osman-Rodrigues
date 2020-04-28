import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LoginSection = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
   
`

const LoginTitle = styled.h2`

`
const LoginInput = styled.input`

`
const LoginButton = styled.button`

`

class Login extends React.Component{

    state={
        userName: '',
        userKey: '',
        hiddenKey:''

    }

    onChangeLoginInputUserName = (e) =>{
        this.setState({userName: e.target.value})
    }
    onChangeLoginInputKey = (e) =>{
           

        this.setState({userKey: e.target.value})
        
    }

    render(){
        console.log(this.state.hiddenKey)

        return(
            <LoginSection>
                <LoginTitle>Login</LoginTitle>  

                <LoginInput 
                onChange={this.onChangeLoginInputUserName}
                value={this.state.userName}
                placeholder={'Nome de Usuário'}
                />
                <LoginInput onChange={this.onChangeLoginInputKey}
                value={this.state.userKey}
                placeholder={'Senha'}
                />

                <LoginButton onClick={this.props.onClickLogin}>Registrar e Fazer Login</LoginButton>
            </LoginSection>
        );
    }
}

export default Login;