import React,{useState, useEffect} from 'react';
import axios from 'axios';

import {
    ChatCard,ChatCardAvatar, ChatCardIconButton,
    ChatWaitMedia,ChatCardClearMatchesButton
} from './styles';

function ChatSection(props){

    const [matchesList, setMatchesList] = useState([])

    const getMatches=()=>{
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${
            props.UserInfos.userName
        }/matches`).then(response=>{
            setMatchesList(response.data.matches);
        }).catch(err=>{
            
        });
    }

    useEffect(()=>{
        getMatches()
    },[])

    const mountCard = ()=>{

        const onClickClearMatches=()=>{
            
            axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${
                props.UserInfos.userName
            }/clear`, {"id": "PatusZf4mHH6UoZfYC8I"},).then(response=>{
                setMatchesList([])
                window.alert(`Matches desfeitos!`, response)
            }).catch(err=>{
                window.alert('Algo deu errado! Tente novamente.')
            });
        }
        
        const mountList= matchesList.map(person =>{
            const onClickPerson = ()=>{
                window.alert(`Iniciando conversa com ${person.name}...`)
            }
            return(
                <ChatCardIconButton size="small" onClick={onClickPerson}>
                    <ChatCardAvatar src={person.photo}/> 
                    {person.name}
                </ChatCardIconButton>
            )
        }) 

        return(
            <ChatCard>
                {
                matchesList.length === 0 ? 
                (
                    <ChatWaitMedia
                    src='https://www.novasafra.com.br/aguarde.gif'
                    alt="waiting"
                    />
                ):
                mountList
                }
                
                <ChatCardClearMatchesButton 
                onClick={onClickClearMatches}
                color='primary' 
                variant='contained'>
                    Desfazer Matches
                </ChatCardClearMatchesButton>
            </ChatCard>
        )
    }

    return(
        mountCard()
    )
}

export default ChatSection