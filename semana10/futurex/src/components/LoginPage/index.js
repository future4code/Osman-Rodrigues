import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'

import {
    LoginPageContainer,ControledLogin,LoginInput,
    LoginButton
} from './styles'

import {Logo, WelcomeText} from '../HomePage/styles'

function LoginPage(props){

    const adminKey = props.AdminKey;

    const [isRegistred, setIsRegistred] = useState(true);

    const [loginInfos, setLoginInfos]= useState({
        email:'',
        password:''
    });

    const onChangeInputs = (e)=>{
        if(e.target.value.trim() !== ''){
            setLoginInfos({...loginInfos,[e.target.name]: e.target.value })    
        }   
    };

    const onClickSignUp = ()=>{
        if(
            isRegistred === false &&
            loginInfos.email.trim() !== '' &&
            loginInfos.password.trim() !== ''
        ){
            window.alert('Registrado com sucesso!')
            setLoginInfos({email:'', password:''})
            setIsRegistred(! isRegistred)
        }else{
            window.alert('Preencha todos os campos corretamente!')
        }
    }
    
    const mountSection =()=>{
        if(isRegistred === true){
            return(
                <ControledLogin>
                    <LoginInput
                    onChange={onChangeInputs}
                    name='email'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    label='E-mail de Administrador'
                    variant='outlined'
                    type='email'
                    value={loginInfos.email}
                    />

                    <LoginInput
                    onChange={onChangeInputs}
                    name='password'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    label='Senha'
                    variant='outlined'
                    type='password'
                    value={loginInfos.password}
                    />

                    <LoginButton
                    variant='outlined'
                    >Login</LoginButton>

                    <LoginButton
                    onClick={()=>{setIsRegistred(! isRegistred)}}
                    variant='text'
                    >Não é registrado? Registre-se!</LoginButton>
                </ControledLogin> 
            )
        }else{
            return(
                <ControledLogin>
                    <LoginInput
                        onChange={onChangeInputs}
                        name='email'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        label='Insira um e-mail válido'
                        variant='outlined'
                        type='email'
                        value={loginInfos.email}
                        />

                        <LoginInput
                        onChange={onChangeInputs}
                        name='password'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        label='Insira uma senha'
                        variant='outlined'
                        type='password'
                        value={loginInfos.password}
                        />

                        <LoginButton
                        onClick={onClickSignUp}
                        variant='outlined'
                        >Registrar</LoginButton>

                        <LoginButton
                        onClick={()=>{setIsRegistred(! isRegistred)}}
                        variant='text'
                        >Voltar</LoginButton>

                </ControledLogin>
            )
        }       
    }
    useEffect(()=>{
        console.log(loginInfos)
    },[loginInfos])
    return(
        <LoginPageContainer>
            <Logo
            src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F03b944d0-9121-4032-9d0d-be54d6f7cb84%2Ffuturex.png?table=block&id=ef125c81-424b-435c-b5f1-be8fee35cbf7&width=770&cache=v2'
            />

            <WelcomeText>Login de Administrador</WelcomeText>

            {mountSection()}
        </LoginPageContainer>
    )
}
export default LoginPage