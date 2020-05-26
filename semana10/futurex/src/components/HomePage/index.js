import React from 'react';
import {useHistory} from "react-router-dom";

import {
    HomePageContainer,HomeActionBar,
    Logo, WelcomeText,ToSectionButton,
    DialogText
} from './styles';

import FuturexLogo from '../../pics/futurex-logo.png';

function HomePage(){
    const history = useHistory();

    const onClickToLogin = ()=>{
        history.push("/login");
    };
    const onClickToForms = ()=>{
        history.push("/application-form");
    };
    
    return(
        
        <HomePageContainer>
            
            <Logo
            onClick={()=>{history.push('/')}}
            src={FuturexLogo}
            />
            
            <WelcomeText>
                Bem-vindo a Futurex!
            </WelcomeText>
            <DialogText>
                Seu interesse em viagens interestelares é:
            </DialogText>

            <HomeActionBar>
                <DialogText>
                    Criar e gerenciar suas própias viagens?
                </DialogText>
                <ToSectionButton
                onClick={onClickToLogin}
                variant='outlined'
                >
                    Quero criar viagens!
                </ToSectionButton>

                <DialogText>
                    Ingressar em viagens como Astronauta? 
                </DialogText>
                <ToSectionButton
                onClick={onClickToForms}
                variant='outlined'
                >
                   Quero me candidatar!
                </ToSectionButton>
            </HomeActionBar>

        </HomePageContainer>
    )
}
export default HomePage