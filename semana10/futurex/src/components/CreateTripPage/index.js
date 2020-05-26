import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import{
    convertDateInput, getUserLocalInfos, validInfosObject,
    useValidSession
} from '../../hooks/hooks'

import {
    CreateTripPageContainer, ControledCreateTripForms,
    CreateTripInput, CreateTripButton
} from './styles';

import {DialogText} from '../HomePage/styles';

function CreateTripPage(props){

    useValidSession();

    const baseUrl = props.BaseUrl;
    const history = useHistory();

    const [tripInfosInputs, setTripInfosInputs] = useState({
        name:'',
        planet:'',
        date:'',
        description:'',
        durationInDays:''
    });

    const [localInfos] = useState(getUserLocalInfos());

    const onChangeCreateTripInputs=(e)=>{
        setTripInfosInputs({
            ...tripInfosInputs, [e.target.name]: e.target.value
        })
    };

    const onClickCreateTrip=async()=>{
        if(localInfos !== null){
            if(validInfosObject(tripInfosInputs)=== true){
                window.alert('Solicitação enviada! Aguarde confirmação.');

                const body = {
                    name: tripInfosInputs.name,
                    planet: tripInfosInputs.planet,
                    date: convertDateInput(tripInfosInputs.date),
                    description: {
                        text: tripInfosInputs.description,
                        owner: localInfos.loggedEmail
                    },
                    durationInDays: tripInfosInputs.durationInDays
                };
                try{
                    const response = await axios.post(`${baseUrl}/trips`,body,
                        {
                            headers:{'auth': localInfos.userToken}
                        }
                    );
                    
                    window.alert(`Viagem "${response.data.trip.name}" criada com sucesso!`);

                    setTripInfosInputs({
                        name:'',
                        planet:'',
                        date:'',
                        description:'',
                        durationInDays:''
                    });  
                }catch(e){
                    window.alert('Algo deu errado! Tente novamente mais tarde.')
                }
            }else{
                window.alert(validInfosObject(tripInfosInputs))
            }
        }
    };

    return(
        <CreateTripPageContainer>
            <DialogText>Criação de Viagem</DialogText>

            <ControledCreateTripForms>
                <CreateTripInput
                required
                type='text'
                InputLabelProps={{
                    shrink: true,
                }}
                variant='outlined'
                margin='normal'
                label='Nome da viagem'
                name='name'
                onChange={onChangeCreateTripInputs}
                value={tripInfosInputs.name}
                />

                <CreateTripInput
                required
                type='text'
                InputLabelProps={{
                    shrink: true,
                }}
                variant='outlined'
                margin='normal'
                label='Destino'
                name='planet'
                onChange={onChangeCreateTripInputs}
                value={tripInfosInputs.planet}
                />

                <CreateTripInput
                required
                type='date'
                InputLabelProps={{
                    shrink: true,
                }}
                variant='outlined'
                margin='normal'
                label='Data de partida'
                name='date'
                onChange={onChangeCreateTripInputs}
                value={tripInfosInputs.date}
                />

                <CreateTripInput
                required
                type='number'
                InputLabelProps={{
                    shrink: true,
                }}
                variant='outlined'
                margin='normal'
                label='Duração (em dias)'
                name='durationInDays'
                onChange={onChangeCreateTripInputs}
                value={tripInfosInputs.durationInDays}
                />
                
                <CreateTripInput
                required
                type='text'
                InputLabelProps={{
                    shrink: true,
                }}
                multiline={true}
                rows="5"
                variant='outlined'
                margin='normal'
                label='Descrição'
                name='description'
                onChange={onChangeCreateTripInputs}
                value={tripInfosInputs.description}
                />

                <CreateTripButton
                variant='outlined'
                onClick={onClickCreateTrip}
                >Criar viagem
                </CreateTripButton>

                <CreateTripButton
                variant='text'
                onClick={()=>{history.goBack()}}
                >Voltar
                </CreateTripButton>

            </ControledCreateTripForms>

        </CreateTripPageContainer>
    )
}
export default CreateTripPage