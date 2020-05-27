import React,{ useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {
    useGetUserTrips, getUserLocalInfos, putApproveApplicant,
    getTripApplicants, useValidSession
} from '../../hooks/hooks';

import {
    ApplicantsPageContainer,ApplicantsPanel,ApplicantDetailsPanel,
    ApplicantsButton, TripName, ApplicantName, ApplicantDetail, 
    ApplicantDetailCardTitle, ApplicantDetailSuggest
} from './style';

import {DialogText} from '../HomePage/styles';
import {PanelActionArea, PanelContentArea} from '../MyTripsPage/styles';

function ApplicantsPage(props){
    useValidSession();

    const baseUrl = props.BaseUrl;
    const history = useHistory();

    const [localInfos] = useState(getUserLocalInfos());
    const [selectedTrip, setSelectedTrip] = useState({});
    const [showTripApplicants, setShowTripApplicants] = useState(false);

    const [selectedApplicant, setSelectedApplicant] = useState({});
    const [showApplicantDetails, setShowApplicantDetails] = useState(false);
    const [showApplicantMessage, setShowApplicanMessage] = useState(false);
    
    const [allTripApplicants, setAllTripApplicants] = useState({});
    
    const myTripsList = useGetUserTrips(baseUrl, localInfos);

    const onClickShowApplicants =(e)=>{
        if(myTripsList !== undefined){
            myTripsList.forEach(trip=>{
                if(trip.id === e.target.id){
                    setSelectedTrip(trip)
                }
            });
            setShowTripApplicants(! showTripApplicants);
    
            if(showTripApplicants && showApplicantDetails === true){
                setShowApplicantDetails( ! showApplicantDetails)
            };
        }  
    };

    const onClickSelectApplicant=(e)=>{
        allTripApplicants.candidates.forEach(applicant=>{
            if(applicant.id === e.target.id){
                setSelectedApplicant(applicant)
            }
        })
        setShowApplicantDetails(true)
    };

    const onClickApproveApplicant = ()=>{
        putApproveApplicant(baseUrl, localInfos, selectedApplicant, selectedTrip)
    };

    const mountApplicantsPanel=()=>{
        if(showTripApplicants === true){
            return(
                <PanelContentArea>
                    <PanelActionArea>
                        <TripName
                        id={selectedTrip.id} 
                        onClick={onClickShowApplicants}
                        >{selectedTrip.name} ({selectedTrip.date})
                        </TripName>
                    </PanelActionArea>
                    {
                    allTripApplicants.candidates !== undefined&&
                    allTripApplicants.candidates.length >0?

                    allTripApplicants.candidates.map(applicant=>{
                        return (
                            <PanelActionArea>
                                <ApplicantName
                                id={applicant.id}
                                onClick={onClickSelectApplicant}
                                >{applicant.name} ({applicant.country})
                                </ApplicantName>
                            </PanelActionArea>
                        )
                    })
                    :<ApplicantDetail>
                       {
                        allTripApplicants.candidates !== undefined&&
                        allTripApplicants.candidates.length === 0?
                        
                       'Ainda não há candidatos para a viagem selecionada.'
                       : 
                       'Buscando candidatos...'
                       }
                    </ApplicantDetail>
                    }
                </PanelContentArea>
            )
        }else{
            return(
                myTripsList.length !== 0 ?
                        myTripsList.map(trip=>{
                            return(
                                <PanelContentArea>
                                    <PanelActionArea>
                                        <TripName
                                        id={trip.id} 
                                        onClick={onClickShowApplicants}
                                        >{trip.name} ({trip.date})
                                        </TripName>
                                    </PanelActionArea>
                                </PanelContentArea>
                            ) 
                        })
                        :<DialogText>Buscando viagens...</DialogText>
            )
        }
    };

    const mountDetailApplicantPanel=()=>{
        if(showApplicantDetails === true){
            return(
                <PanelContentArea>
                    <ApplicantDetailCardTitle>
                        Detalhes do Candidato
                    </ApplicantDetailCardTitle>
                    {
                    showApplicantMessage === true?
                    <ApplicantDetail>
                    {selectedApplicant.applicationText}
                    </ApplicantDetail>
                    :
                    <ApplicantDetail>
                        Nome: {selectedApplicant.name}
                        <br/> 
                        Idade: {selectedApplicant.age} anos
                        <br/>  
                        Profissão: {selectedApplicant.profession}
                        <br/>   
                        País: {selectedApplicant.country}
                    </ApplicantDetail>
                    }

                    <ApplicantsButton
                    variant='outlined'
                    onClick={onClickApproveApplicant}
                    >Aprovar
                    </ApplicantsButton>
                    
                    <PanelActionArea>
                        <ApplicantDetailSuggest
                        onClick={()=>{setShowApplicanMessage( ! showApplicantMessage)}}
                        >
                            {
                            showApplicantMessage === true?
                            'Ver outros detalhes':
                            'Ver mensagem do candidato'
                            }
                        </ApplicantDetailSuggest>
                    </PanelActionArea>
                </PanelContentArea>
            )
        }else{
            return(
                <ApplicantDetailCardTitle>Selecione um candidato</ApplicantDetailCardTitle>
            )
        }
    };
    
    useEffect(()=>{
        if(showTripApplicants === true){
           const getTripCandidates = async()=>{
               try{
                    const allTripApplicants = await getTripApplicants(baseUrl, localInfos, selectedTrip);
                    setAllTripApplicants(allTripApplicants)
                }catch(e){
                    
                }
            }
            getTripCandidates()
        }
    },[showTripApplicants]);
    
    return(
        <ApplicantsPageContainer>
            <DialogText>Candidatos</DialogText>

            <ApplicantsPanel>
                <DialogText>Selecione uma viagem</DialogText>
                
                {mountApplicantsPanel()}

            </ApplicantsPanel>

            <ApplicantDetailsPanel >

                {mountDetailApplicantPanel()}

            </ApplicantDetailsPanel>

            <ApplicantsButton
            variant="text"
            name="botao de voltar"
            onClick={()=>{history.goBack()}}
            >
            Voltar
            </ApplicantsButton>
        </ApplicantsPageContainer>
    )
}
export default ApplicantsPage