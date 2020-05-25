import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';

import {
    MyTripsPageContainer,SelectableTripsPanel,SelectedTripDetailsPanel,
    MyTripsButton,PanelActionArea,PanelContentArea,TripName,
    TripDetail, TripDetailCardTitle, TripDetailSuggest

} from './styles';

import {DialogText} from '../HomePage/styles';
import { CardActionArea } from '@material-ui/core';

export function useGetUserTrips(adminKey, localInfos){

    const [myTripsList, setMyTripsList] = useState([]);

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
                        setMyTripsList(allTripsList)
                    }
                }
            });
        })
    }, [myTripsList]);

    return myTripsList
}

function MyTripsPage(props){

    const adminKey = props.AdminKey;
    const history = useHistory();

    const [localInfos, setLocalInfos] = useState(JSON.parse(
        localStorage.getItem('userLoginInfo')
    ));
    const [selectedTrip, setSelectedTrip] = useState();
    const [seeTripDescription, setSeeTripDescription] = useState(false);

    const userTripsList = useGetUserTrips(adminKey, localInfos);

    const onClickSeeDetails =(e)=>{
        userTripsList.forEach(trip=>{
            if(trip.id === e.target.id){
                setSelectedTrip(trip)
            }
        })
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

                <TripDetailSuggest>
                    {
                        seeTripDescription === true ?
                        'Ver outros detalhes':'Ver a descrição'
                    }
                    
                </TripDetailSuggest>
            </PanelContentArea>
        )
    };

    const mountTripsList =()=>{
        const mountedList = userTripsList.map(trip=>{
                return(
                    <CardActionArea>
                        <TripName
                        id={trip.id}
                        onClick={onClickSeeDetails}
                        >
                        {trip.name} ({trip.date})
                        </TripName>
                    </CardActionArea>
                )
            })

        return mountedList
    };

    const onClickDeleteTrip=()=>{
        window.confirm(`Confirmar exclusão de '${selectedTrip.name}?'`)?
        axios.
        delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${
            adminKey
        }/trips/${
            selectedTrip.id
        }
        `). 
        then(response=>{
            window.alert(`'${selectedTrip.name}' foi excluída!`);
        }). 
        catch(err=>{
            window.alert('Algo deu errado! Exclusão cancelada.')
        })
        : window.alert('Exclusão cancelada.')
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