import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import {useGetUserTrips} from '../MyTripsPage/index';

import {
    ApplicantsPageContainer,ApplicantsPanel,ApplicantDetailsPanel,
    ApplicantsButton, TripName, ApplicantName, TripNameApplicants,
    ApplicantDetail, ApplicantDetailCardTitle, ApplicantDetailSuggest
} from './style';

import {DialogText} from '../HomePage/styles';
import {PanelActionArea, PanelContentArea} from '../MyTripsPage/styles';

function ApplicantsPage(props){
    const adminKey = props.AdminKey;
    const history = useHistory();
    const pathParams = useParams();

    const [localInfos, setLocalInfos] = useState(JSON.parse(
        localStorage.getItem('userLoginInfo')
    ));
    const [selectedTrip, setSelectedTrip] = useState({});
    const [showTripApplicants, setShowTripApplicants] = useState(false);

    const [selectedApplicant, setSelectedApplicant] = useState({});
    const [showApplicantDetails, setShowApplicantDetails] = useState(false);
    const [showApplicantMessage, setShowApplicanMessage] = useState(false);
    
    const [allTripApplicants, setAllTripApplicants] = useState({});
    
    const myTripsList = useGetUserTrips(adminKey, localInfos);

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
        const body = {approve: true}
        window.confirm(`Confirmar aprovação de ${selectedApplicant.name} em "${selectedTrip.name}"?`)?
        (
            axios.
            put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${
                adminKey
            }/trips/${
                selectedTrip.id
            }/candidates/${
                selectedApplicant.id
            }/decide`, body,{
                headers:{
                    "auth":pathParams.userToken
                }
            }).
            then(response=>{
                window.alert(`${selectedApplicant.name} aprovado(a)`)
            }). 
            catch(err=>{
                window.alert('Algo deu errado! A aprovação foi cancelada.')
            })
        )
        :window.alert('Aprovação cancelada.')
    }
    useEffect(()=>{
        if(showTripApplicants === true){
            axios.
            get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${
                adminKey
            }/trip/${selectedTrip.id}`,{
                headers:{
                    "auth":pathParams.userToken
                }
            }).
            then(response=>{
                setAllTripApplicants({
                    candidates: response.data.trip.candidates,
                    approved: response.data.trip.approved
                })
            })
        }
    },[showTripApplicants])
    
    return(
        <ApplicantsPageContainer>
            <DialogText>Candidatos</DialogText>

            <ApplicantsPanel>
                <DialogText>Selecione uma viagem</DialogText>
                    {
                    showTripApplicants === true ?
                        <PanelContentArea>
                            <PanelActionArea>
                                <TripName
                                id={selectedTrip.id} 
                                onClick={onClickShowApplicants}
                                >{selectedTrip.name} ({selectedTrip.date})
                                </TripName>
                            </PanelActionArea>
                            {
                            allTripApplicants.candidates !== undefined ?
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
                            :<DialogText>Buscando candidatos...</DialogText>
                            }
                        </PanelContentArea>
                    :
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
                    }                   
            </ApplicantsPanel>

            <ApplicantDetailsPanel >
                {
                showApplicantDetails === true ?
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
                :
                    <ApplicantDetailCardTitle>Selecione um candidato</ApplicantDetailCardTitle>
                }       
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