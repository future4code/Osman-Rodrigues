import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import{
    convertDateInput, getUserLocalInfos, validInfosObject,
    useValidSession
} from '../../hooks/hooks';

import{TextField} from '@material-ui/core'

import './styles.css';

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

            <ControledCreateTripForms component='form'>
                <TextField
                autoFocus={true}
                required={true}
                type='text'
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    pattern: "[A-Za-z ]{5,}",
                    title: "O nome da viagem deve conter no mínimo 5 letras"
                }}
                style={{
                    ':invalid':'color="tomato"'
                }}
                variant='outlined'
                margin='normal'
                label='Nome da viagem'
                name='name'
                onChange={onChangeCreateTripInputs}
                value={tripInfosInputs.name}
                />

                <CreateTripInput
                required={true}
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
                required={true}
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
                required={true}
                type='number'
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    title: "Tempo mínimo de 50 dias",
                    min:'50'
                }}
                variant='outlined'
                margin='normal'
                label='Duração (em dias)'
                name='durationInDays'
                onChange={onChangeCreateTripInputs}
                value={tripInfosInputs.durationInDays}
                />
                
                <CreateTripInput
                required={true}
                type='text'
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    maxlength: 60,
                    title: "A descrição deve ter no máximo 60 caracteres"
                }}
                multiline={true}
                rows='3'
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

            </ControledCreateTripForms>
            
            <CreateTripButton
            variant='text'
            onClick={()=>{history.goBack()}}
            >Voltar
            </CreateTripButton>
        </CreateTripPageContainer>
    )
}
export default CreateTripPage