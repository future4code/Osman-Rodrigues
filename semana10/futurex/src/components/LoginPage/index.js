import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import {
    LoginPageContainer,ControledLogin,LoginInput,
    LoginButton
} from './styles';

import {Logo, WelcomeText} from '../HomePage/styles';

export let userLoggedInfos;

function LoginPage(props){

    const adminKey = props.AdminKey;

    const history = useHistory();

    const [isRegistred, setIsRegistred] = useState(true);
    const [loginInfos, setLoginInfos]= useState({
        email:'',
        password:''
    });

    const onChangeInputs = (e)=>{
        setLoginInfos({...loginInfos,[e.target.name]: e.target.value })    
    };

    const onClickSignUp = ()=>{
        const waitingDialogue =()=>{
            window.alert('Solicitação de registro enviada. Por favor, aguarde a confirmação antes de fazer login.');
        };

        if(
            isRegistred === false &&
            loginInfos.email.trim() !== '' &&
            loginInfos.password.trim() !== ''
        ){
            waitingDialogue();

            const body ={
                email: loginInfos.email,
                password: loginInfos.password
            };

            axios.
            post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${
                adminKey
            }/signup`, body,).
            then(response=>{
                if(response.data.success === true){
                    window.alert('Registro feito com sucesso!')
                    setLoginInfos({email:'', password:''})
                    setIsRegistred(! isRegistred)
                }   
            }).
            catch(err=>{
                window.alert('Não foi possível registrar. Tente mais tarde.')
                setLoginInfos({email:'', password:''})
            })   
        }else{
            window.alert('Preencha todos os campos corretamente!')
        }
    };
    
    const onClickLogin =()=>{
        
        if(
            isRegistred === true &&
            loginInfos.email.trim() !== '' &&
            loginInfos.password.trim() !== ''
        ){
            const body ={
                email: loginInfos.email,
                password: loginInfos.password
            };

            axios.
            post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${
                adminKey
            }/login`, body,).
            then(response=>{
                
                if(response.data.success === true){
                    userLoggedInfos = {
                        token: response.data.token,
                        id: response.data.user.id,
                        email: response.data.user.email,
                    };

                    localStorage.setItem("userLoginInfo", JSON.stringify({
                        beLogged: true, loggedEmail: userLoggedInfos.email
                    }))

                    history.replace(`/admin/${
                        userLoggedInfos.id
                    }_${
                        userLoggedInfos.token
                    }`)
                }
            }).
            catch(err=>{
                window.alert(err.response.data.message)
            });
        }else{
            window.alert('Preencha todos os campos antes de fazer login!')
        }
    }

    useEffect(()=>{
        setIsRegistred(true)
    },[])

    return(
        <LoginPageContainer>
            <Logo
            src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F03b944d0-9121-4032-9d0d-be54d6f7cb84%2Ffuturex.png?table=block&id=ef125c81-424b-435c-b5f1-be8fee35cbf7&width=770&cache=v2'
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