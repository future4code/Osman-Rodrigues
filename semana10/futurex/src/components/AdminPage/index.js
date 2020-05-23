import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {
    AdminPageContainer, AdminControledPanel, AdminButton,
    DialogText
} from './style';

import {WelcomeText} from '../HomePage/styles';

const getPathParamCredential = (credential, urlParam)=>{
    const convertedCredential = String(credential).toLowerCase()
    let credentialLeng = 0;
    let selectedCredential = '';

    if(convertedCredential === 'id'){
        for(let letter of urlParam){
            if(credentialLeng < 20){
                selectedCredential += letter;
                credentialLeng += 1
            }  
        }
    }else if(convertedCredential === 'token'){
        for(let letter of urlParam){
            if(credentialLeng < 21){
                credentialLeng += 1
            }else{
                selectedCredential += letter;
            }
        }
    }

    return selectedCredential
};

function AdminPage(){

    const [localInfos, setLocalInfos] = useState(JSON.parse(
        localStorage.getItem('userLoginInfo')
    ));

    const pathParams = useParams();
    const history = useHistory();

    const onClickLogout=()=>{
        localStorage.setItem('userLoginInfo','')
        history.replace('/login')
    };

    const validedLoginSection =()=>{
        if(
            localInfos !== null&&
            localInfos.beLogged === true
        ){
            return(
                <AdminPageContainer>
                    <WelcomeText>Área do Administrador</WelcomeText>
        
                    <AdminControledPanel>
                        <AdminButton
                        onClick={()=>{history.push(`/admin/${
                            getPathParamCredential('id', pathParams.userCredentials)
                        }/createTrip/${
                            getPathParamCredential('token', pathParams.userCredentials)
                        }`)}}
                        variant='outlined'
                        >Criar Viagem</AdminButton>
        
                        <AdminButton
                        onClick={()=>{history.push(`/admin/${
                            getPathParamCredential('id', pathParams.userCredentials)
                        }/myTrips/${
                            getPathParamCredential('token', pathParams.userCredentials)
                        }`)}}
                        variant='outlined'
                        >Minhas Viagens </AdminButton>
        
                        <AdminButton
                        onClick={()=>{history.push(`/admin/${
                            getPathParamCredential('id', pathParams.userCredentials)
                        }/applicants/${
                            getPathParamCredential('token', pathParams.userCredentials)
                        }`)}}
                        variant='outlined'
                        >Candidatos</AdminButton>
        
                        <AdminButton
                        onClick={onClickLogout}
                        >Sair</AdminButton>
                    </AdminControledPanel>

                    <DialogText>Logado como: {localInfos.loggedEmail} </DialogText>
                </AdminPageContainer>
            ) 
        }else{
            return <h1>Página não encontrada!</h1>
        }
    };

    return(
        validedLoginSection() 
    )   
}

export default AdminPage