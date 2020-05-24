import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';
import {useGetUserTrips} from '../MyTripsPage/index';

import {
    ApplicantsPageContainer,ApplicantsPanel,ApplicantDetailsPanel,
    ApplicantsButton, TripName, ApplicantName
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
    const [applicantsList, setApplicantsList] = useState([]);
    const [tripApplicants, setTripApplicants] = useState({});
    const test = {
        id: "NAOp5L3Wuunexq9SbUso",
        applicationText: "Quero muuuuuuito ir!!!",
        profession: "Chefe",
        age: 20,
        name: "Astrodev",
        country: "Brasil"
      }
    const testApplicants = [test,test,test,test,test]
    
    const myTripsList = useGetUserTrips(adminKey, localInfos);

    const onClickViewApplicants =(e)=>{
        myTripsList.forEach(trip=>{
            if(trip.id === e.target.id){
                setSelectedTrip(trip)
            }
        })
        setShowTripApplicants(! showTripApplicants)
    };

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
                setTripApplicants({
                    candidates: response.data.trip.candidates,
                    approved: response.data.trip.approved
                })
            })
        }
    },[showTripApplicants])

    useEffect(()=>{
        console.log(tripApplicants)
    },[myTripsList, showTripApplicants, selectedTrip, tripApplicants]);
    
    return(
        <ApplicantsPageContainer>
            <DialogText>Candidatos</DialogText>

            <ApplicantsPanel>
                <DialogText>Selecione uma viagem</DialogText>
                    {
                    showTripApplicants === true ?
                        <PanelContentArea>
                            <h5
                            id={selectedTrip.id}
                            onClick={onClickViewApplicants}
                            >
                            {selectedTrip.name} ({selectedTrip.planet})
                            </h5>
                                {
                                testApplicants.map(applicant=>{
                                    return (
                                    <ApplicantName
                                    onClick={()=>{console.log(applicant.id)}}
                                    >{applicant.name}
                                    </ApplicantName>
                                    )
                                })
                                }
                        </PanelContentArea>
                    :
                        <PanelActionArea>
                            {
                            myTripsList.map(trip=>{
                                return(
                                    <TripName
                                    id={trip.id} 
                                    onClick={onClickViewApplicants}
                                    >{trip.name} ({trip.planet})</TripName>
                                ) 
                            })
                            }
                        </PanelActionArea>   
                    }                   
            </ApplicantsPanel>

            <ApplicantDetailsPanel onClick={()=>{console.log('Mudou o detalhe')}}>

                <DialogText>Selecione um candidato</DialogText>
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