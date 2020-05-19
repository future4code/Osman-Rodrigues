import React from 'react';
import {useHistory} from "react-router-dom";

import {
    HomePageContainer,HomeActionBar,
    Logo, WelcomeText,ToSectionButton,
    DialogText
} from './styles';

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
            src='https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F03b944d0-9121-4032-9d0d-be54d6f7cb84%2Ffuturex.png?table=block&id=ef125c81-424b-435c-b5f1-be8fee35cbf7&width=770&cache=v2'
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
                variant='contained'
                >
                    Quero criar viagens!
                </ToSectionButton>

                <DialogText>
                    Ingressar em viagens como Astronauta? 
                </DialogText>
                <ToSectionButton
                onClick={onClickToForms}
                variant='contained'
                >
                   Quero me candidatar!
                </ToSectionButton>
            </HomeActionBar>

        </HomePageContainer>
    )
}
export default HomePage