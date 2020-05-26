import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import{setUserLocalInfos} from '../../hooks/hooks';

import {
    LoginPageContainer,ControledLogin,LoginInput,
    LoginButton
} from './styles';

import {Logo, WelcomeText} from '../HomePage/styles';

import FuturexLogo from '../../pics/futurex-logo.png';

export let userLoggedInfos;

function LoginPage(props){

    const baseUrl = props.BaseUrl;
    const history = useHistory();

    const [isRegistred, setIsRegistred] = useState(true);
    const [loginInfos, setLoginInfos]= useState({
        email:'',
        password:''
    });

    const onChangeInputs = (e)=>{
        setLoginInfos({...loginInfos,[e.target.name]: e.target.value })    
    };

    const onClickSignUp = async()=>{
        if(
            isRegistred === false &&
            loginInfos.email.trim() !== '' &&
            loginInfos.password.trim() !== ''
        ){
            window.alert('Solicitação de registro enviada. Por favor, aguarde a confirmação antes de fazer login.')

            try {
                window.alert('Solicitando registro...');
                const response = await axios.post(`${baseUrl}/signup`, loginInfos,);

                if(response.data.success === true){
                    window.alert('Registro feito com sucesso!')
                    setLoginInfos({email:'', password:''})
                    setIsRegistred(! isRegistred)
                }   
            }
            catch(e){
                window.alert('Não foi possível registrar. Tente mais tarde.')
                setLoginInfos({email:'', password:''})
            }   
        }else{
            window.alert('Preencha todos os campos corretamente!')
        }
    };
    
    const onClickLogin = async()=>{
        if(
            isRegistred === true &&
            loginInfos.email.trim() !== '' &&
            loginInfos.password.trim() !== ''
        ){  
            try {
                window.alert('Validando credenciais...');
                const response = await axios.post(`${baseUrl}/login`,loginInfos,);
                
               if(response.data.success === true){
                    setUserLocalInfos({
                        loggedIn: true,
                        loggedEmail: response.data.user.email,
                        userId: response.data.user.id, 
                        userToken: response.data.token,
                    });

                    history.replace(`/admin/${response.data.user.id}`);
                    window.alert(`Bem vindo(a), ${response.data.user.email}!`);
                }
            }catch(e){
                window.alert(e.response.data.message)
            }
        }else{
            window.alert('Preencha todos os campos antes de fazer login!')
        }
    };

    useEffect(()=>{
        setIsRegistred(true)
    },[]);
    
    return(
        <LoginPageContainer>
            <Logo
            onClick={()=>{history.push('/')}}
            src={FuturexLogo}
            />

            <WelcomeText>Login de Administrador</WelcomeText>

            <ControledLogin>
                    <LoginInput
                    onChange={onChangeInputs}
                    name='email'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    label={
                        isRegistred === true ?
                         'E-mail de Administrador':
                         'Informe um e-mail válido'
                        }
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
                    label={
                        isRegistred === true ?
                        'Senha':
                        'Crie uma senha'
                      }
                    variant='outlined'
                    type='password'
                    value={loginInfos.password}
                    />

                    <LoginButton
                    onClick={
                        isRegistred === true?
                        onClickLogin:
                        onClickSignUp
                    }
                    variant='outlined'
                    >{
                        isRegistred === true ?
                        'Login':
                        'Registrar!'
                    }</LoginButton>

                    <LoginButton
                    onClick={()=>{setIsRegistred(! isRegistred)}}
                    variant='text'
                    >{
                        isRegistred === true ?
                        'Não é registrado?':
                        'Ir para login'
                    }</LoginButton>
                </ControledLogin>
        </LoginPageContainer>
    )
}
export default LoginPage