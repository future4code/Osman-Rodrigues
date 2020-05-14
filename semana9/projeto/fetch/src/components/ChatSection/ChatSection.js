import React,{useState, useEffect} from 'react';
import axios from 'axios';

import {
    ChatCard,ChatCardHeader,ChatCardMedia,
    ChatCardAvatar, ChatCardActions, ChatCardIconButton,
    ChatCardLikeIcon, ChatCardContent, ChatWaitMedia,
    ChatCardRejectIcon, ChatCardBioIcon
} from './styles';

function ChatSection(props){

    const [matchesList, setMatchesList] = useState([])

    const getMatches=()=>{
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${
            props.UserInfos.userName
        }/matches`).then(response=>{
            console.log(response.data.matches)
            setMatchesList(response.data.matches);
        }).catch(err=>{
            
        });
    }

    useEffect(()=>{
        getMatches()
    },[])

    const mountCard = ()=>{
        console.log(matchesList)
        const mountList= matchesList.map(person =>{
            return <p>{person.name}</p>
        }) 

        return(

            <ChatCard>
                {mountList}
            </ChatCard>
        )
    }

    return(
        mountCard()
    )
}

export default ChatSection