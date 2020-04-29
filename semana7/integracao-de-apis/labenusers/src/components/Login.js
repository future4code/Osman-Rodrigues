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
        userEmail: '',
    }

    componentWillUnmount(){

        const dataToSend = {name: this.state.userName, email: this.state.userEmail}
        
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', dataToSend,{
            headers: {
            'Authorization':'osman-rodrigues-julian'
            }
        }).then((response) =>{
            window.alert(`Usuário ${dataToSend.name} registado`)
        }).catch((error)=>{
            window.alert(`Erro no envio dos dados!\n${error}`) 
        })
    }

    onChangeLoginInputUserName = (e) =>{
        this.setState({userName: e.target.value})
    }
    onChangeLoginInputKey = (e) =>{
        this.setState({userEmail: e.target.value}) 
    }

    render(){
    
        return(
            <LoginSection>
                <LoginTitle>Login</LoginTitle>  

                <LoginInput 
                onChange={this.onChangeLoginInputUserName}
                value={this.state.userName}
                placeholder={'Nome de Usuário'}
                />
                <LoginInput onChange={this.onChangeLoginInputKey}
                value={this.state.userEmail}
                placeholder={'Email'}
                />

                <LoginButton 
                onClick={this.props.onClickLogin}
                >Registrar e Fazer Login
                </LoginButton>
            </LoginSection>
        );
    }
}

export default Login;