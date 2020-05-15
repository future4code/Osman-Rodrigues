import React,{useState, useEffect} from 'react';
import axios from 'axios';

import {
    ChatCard,ChatCardRow,ChatCardMedia,
    ChatCardAvatar, ChatCardActions, ChatCardIconButton,
    ChatCardLikeIcon, ChatCardContent, ChatWaitMedia,
    ChatCardRejectIcon, ChatCardBioIcon, ChatCardClearMatchesButton
} from './styles';

function ChatSection(props){

    const [matchesList, setMatchesList] = useState([])

    const getMatches=()=>{
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${
            props.UserInfos.userName
        }/matches`).then(response=>{
            //console.log(response.data.matches)
            setMatchesList(response.data.matches);
        }).catch(err=>{
            
        });
    }

    useEffect(()=>{
        getMatches()
        console.log(props.UserInfos.userName)
    },[props.UserInfos.userName])

    const mountCard = ()=>{

        const onClickClearMatches=()=>{
            console.log('matches excluidos')
            
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
                console.log(`Conversando com ${person.name}...`)
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