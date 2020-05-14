import React,{useState, useEffect} from 'react';
import axios from 'axios';

import {
    ExploreCard,ExploreCardHeader,ExploreCardMedia,
    ExploreCardAvatar, ExploreCardActions, ExploreCardIconButton,
    ExploreCardLikeIcon, ExploreCardContent, ExploreWaitMedia,
    ExploreCardRejectIcon, ExploreCardBioIcon
} from './styles';

function ExploreSection(props){

    const [suggestedPerson, setSuggestedPerson] = useState('')
    const [showContent, setShowContent] = useState(false)
    
    const suggestAPerson =()=>{
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${
            props.UserInfos.userName  
        }/person`).then(response=>{
            setSuggestedPerson(response.data.profile);
        }).catch(err=>{
            
        });
    }

    useEffect(()=>{
        suggestedPerson === '' ?(
            suggestAPerson()
        ):
        setSuggestedPerson( suggestedPerson) 
    }, [suggestedPerson])

    const mountCard =()=>{
        if(suggestedPerson !== ''){
            
            const onClickChangeContent = ()=>{
                setShowContent( ! showContent)
            }

            const onClickLike=()=>{
                const body = {
                    id: suggestedPerson.id,
                    choice: true
                }
                axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${
                    props.UserInfos.userName
                }/choose-person`,body,{
                    headers:{
                        'Content-type':'application/json'
                    }
                }).then(response =>{
                    setSuggestedPerson('')
                }).catch(err=>{
                })
            }

            return(
                <ExploreCard>
                    <ExploreCardHeader
                        avatar={
                            <ExploreCardAvatar>
                                {suggestedPerson.name[0]}
                            </ExploreCardAvatar>
                        }
                        title={suggestedPerson.name}
                        subheader={`${suggestedPerson.age} anos`}
                    />
                    
                    {
                        showContent === false ?
                        (
                            <ExploreCardMedia
                            onClick={onClickChangeContent}
                            image={suggestedPerson.photo}
                            title="User Photo"
                            />
                        ): 
                        (
                            <ExploreCardContent 
                            onClick={onClickChangeContent}
                            >
                            {`${suggestedPerson.bio}`}
                            </ExploreCardContent>
                        )
                     }
            
                    <ExploreCardActions>

                        <ExploreCardIconButton onClick={onClickLike}>
                            <ExploreCardLikeIcon/>
                        </ExploreCardIconButton>

                        <ExploreCardIconButton 
                        onClick={onClickChangeContent}>
                            <ExploreCardBioIcon/>
                        </ExploreCardIconButton>

                        <ExploreCardIconButton 
                        onClick={()=>{setSuggestedPerson('')}}>
                            <ExploreCardRejectIcon/>
                        </ExploreCardIconButton>

                    </ExploreCardActions>

                </ExploreCard>
            )
        }else{
            return(
                <ExploreCard>
                    <ExploreWaitMedia
                    src='https://www.novasafra.com.br/aguarde.gif'
                    alt="waiting"
                    />
                </ExploreCard>
            )
        }
    }

    return(
        mountCard()
    )
}

export default ExploreSection