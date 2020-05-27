import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

import{
    useGetUserTrips,deleteTrip ,getUserLocalInfos,
    useValidSession
} from '../../hooks/hooks'

import {
    MyTripsPageContainer,SelectableTripsPanel,SelectedTripDetailsPanel,
    MyTripsButton,PanelActionArea,PanelContentArea,TripName,
    TripDetail, TripDetailCardTitle, TripDetailSuggest

} from './styles';

import {DialogText} from '../HomePage/styles';

function MyTripsPage(props){

    useValidSession();

    const baseUrl = props.BaseUrl;
    const history = useHistory();

    const [localInfos] = useState(getUserLocalInfos());
    const [selectedTrip, setSelectedTrip] = useState();
    const [seeTripDescription, setSeeTripDescription] = useState(false);

    const userTripsList = useGetUserTrips(baseUrl, localInfos);

    const onClickSeeDetails =(e)=>{
        userTripsList.forEach(trip=>{
            if(trip.id === e.target.id){
                setSelectedTrip(trip)
            }
        })
    };

    const onClickDeleteTrip=async()=>{
        await deleteTrip(baseUrl, selectedTrip)
        setSelectedTrip(undefined)
        window.location.reload()
    };

    const mountTripsList =()=>{
        const mountedList = userTripsList.map(trip=>{
                return(
                    <PanelActionArea>
                        <TripName
                        id={trip.id}
                        onClick={onClickSeeDetails}
                        >
                        {trip.name} ({trip.date})
                        </TripName>
                    </PanelActionArea>
                )
            })
        return mountedList
    };

    const mountTripDetailsPanel=()=>{
        return(
            <PanelContentArea>
                <TripDetailCardTitle>Detalhes</TripDetailCardTitle>
                {
                    seeTripDescription === true?
                    <TripDetail>
                        {selectedTrip.description.text}
                    </TripDetail>
                    :
                    <TripDetail>
                        Título: {selectedTrip.name}
                        <br/>
                        Destino: {selectedTrip.planet}
                        <br/>
                        Partida: {selectedTrip.date}
                        <br/>
                        Duração: {selectedTrip.durationInDays} dias
                    </TripDetail>
                }

                <MyTripsButton
                variant='outlined'
                onClick={onClickDeleteTrip}
                >
                Excluir
                </MyTripsButton>
                <PanelActionArea>
                    <TripDetailSuggest 
                    onClick={()=>{setSeeTripDescription(! seeTripDescription)}}
                    >
                        {
                            seeTripDescription === true ?
                            'Ver outros detalhes':'Ver a descrição'
                        }
                        
                    </TripDetailSuggest>
                </PanelActionArea>
            </PanelContentArea>
        )
    };

    return(
        <MyTripsPageContainer>
            <DialogText>Minhas Viagens</DialogText>

            <SelectableTripsPanel>
                {
                    userTripsList.length > 0 ?
                    mountTripsList()
                    :
                    <DialogText>Buscando viagens...</DialogText>
                }
            </SelectableTripsPanel>

            <SelectedTripDetailsPanel>
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