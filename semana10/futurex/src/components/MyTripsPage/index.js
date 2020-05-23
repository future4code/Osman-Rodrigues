import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import {
    MyTripsPageContainer,SelectableTripsPanel,SelectedTripDetailsPanel,
    MyTripsButton,PanelActionArea,PanelContentArea,TripName,
    TripDetail, TripDetailTitle, TripDetailSuggest

} from './styles';

import {DialogText} from '../HomePage/styles'

function MyTripsPage(props){

    const adminKey = props.AdminKey;
    const history = useHistory();

    const [localInfos, setLocalInfos] = useState(JSON.parse(
        localStorage.getItem('userLoginInfo')
    ));

    const [myTripsList, setMyTripsList] = useState([]);
    const [selectedTrip, setSelectedTrip] = useState();
    const [seeTripDescription, setSeeTripDescription] = useState(false);

    const onClickSeeDetails =(e)=>{
        myTripsList.forEach(trip=>{
            if(trip.id === e.target.id){
                setSelectedTrip(trip)
            }
        })
    };

    const mountTripDetailsPanel=()=>{
        return(
            <PanelContentArea>
                <TripDetailTitle>Detalhes</TripDetailTitle>
                {
                    seeTripDescription === true?
                    <TripDetail>
                        {selectedTrip.description.text}
                    </TripDetail>
                    :
                    <TripDetail>
                        Nome: {selectedTrip.name}
                        <br/>
                        Destino: {selectedTrip.planet}
                        <br/>
                        Partida: {selectedTrip.date}
                        <br/>
                        Duração: {selectedTrip.durationInDays} dias
                    </TripDetail>
                }  
                <TripDetailSuggest>
                    {
                        seeTripDescription === true ?
                        '':'Clique para ver a Descrição'
                    }
                    
                </TripDetailSuggest>
            </PanelContentArea>
        )
    };

    useEffect(()=>{

        axios.
        get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${
            adminKey
        }/trips`). 
        then(response=>{
            const allTripsList = response.data.trips;
            allTripsList.forEach(trip => {
                if(typeof(trip.description) === 'object'){
                    if(trip.description.owner === localInfos.loggedEmail){
                        setMyTripsList([... myTripsList, trip])
                    }
                }
            });
        })
    }, []);

    return(
        <MyTripsPageContainer>
            <DialogText>Minhas Viagens</DialogText>

            <SelectableTripsPanel>
                <PanelActionArea>
                    {
                        myTripsList.length > 0 ?
                        myTripsList.map(trip=>{
                            return(
                                <TripName
                                id={trip.id}
                                onClick={onClickSeeDetails}
                                >
                                {trip.name} ({trip.date})
                                </TripName>
                            )
                        }):
                        <DialogText>Buscando viagens...</DialogText>
                    }
                </PanelActionArea>
            </SelectableTripsPanel>

            <SelectedTripDetailsPanel 
            onClick={()=>{setSeeTripDescription(! seeTripDescription)}}
            >
                {
                    selectedTrip !== undefined?
                    mountTripDetailsPanel():
                    <DialogText>Selecione uma viagem</DialogText>
                }
            </SelectedTripDetailsPanel>

            <MyTripsButton
            variant="text"
            name="botao de voltar"
            onClick={()=>{history.goBack()}}
            >
            Voltar
            </MyTripsButton>
        </MyTripsPageContainer>
    )
}

export default MyTripsPage