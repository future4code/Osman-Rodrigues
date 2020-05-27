import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {getUserLocalInfos, useValidSession} from '../../hooks/hooks'

import {
    AdminPageContainer, AdminControledPanel, AdminButton,
    DialogText
} from './style';

import {WelcomeText} from '../HomePage/styles';

function AdminPage(){
    useValidSession();

    const [localInfos] = useState(getUserLocalInfos());

    const history = useHistory();

    const onClickLogout=()=>{
        localStorage.clear()
        history.replace('/login')
    };

    return(
        <AdminPageContainer>
            <WelcomeText>Área do Administrador</WelcomeText>

            <AdminControledPanel>
                <AdminButton
                onClick={()=>{history.push(`/admin/${
                    localInfos.userId
                }/createTrip`)}}
                variant='outlined'
                >Criar Viagem</AdminButton>

                <AdminButton
                onClick={()=>{history.push(`/admin/${
                    localInfos.userId
                }/myTrips`)}}
                variant='outlined'
                >Minhas Viagens </AdminButton>

                <AdminButton
                onClick={()=>{history.push(`/admin/${
                    localInfos.userId
                }/applicants`)}}
                variant='outlined'
                >Candidatos</AdminButton>

                <AdminButton
                onClick={onClickLogout}
                >Sair</AdminButton>
            </AdminControledPanel>

            {
            ()=>{if(localInfos.loggedEmail!== null){
                return <DialogText>Logado como: {localInfos.loggedEmail}</DialogText>
                }
            }   
            }
        </AdminPageContainer>
    )    
}

export default AdminPage