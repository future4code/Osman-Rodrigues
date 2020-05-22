import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import {
    CreateTripPageContainer, ControledCreateTripForms,
    CreateTripInput, CreateTripButton
} from './styles';

import {DialogText} from '../HomePage/styles'

function CreateTripPage(props){

    const adminKey = props.AdminKey;
    const history= useHistory()


    const [tripInfosInputs, setTripInfosInputs] = useState({
        name:'',
        planet:'',
        date:'',
        description:'',
        durationInDays:''
    })

    const onChangeCreateTripInputs=(e)=>{
        setTripInfosInputs({
            ...tripInfosInputs, [e.target.name]: e.target.value
        })
    }

    const onClickCreateTrip=()=>{
        console.log(tripInfosInputs)
    }

    useEffect(()=>{
        //console.log(tripInfosInputs)
    },[tripInfosInputs])

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