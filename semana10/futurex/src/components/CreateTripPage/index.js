import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import{
    convertDateInput, getUserLocalInfos, validInfosObject,
    useValidSession, useForm
} from '../../hooks/hooks';

import './styles.css';
import {
    CreateTripPageContainer, ControledCreateTripForms,
    CreateTripInput, CreateTripButton, SelectDestiny, DestinyOption,
    SelectLabel,SubmitButton
} from './styles';
import {DialogText} from '../HomePage/styles';

function CreateTripPage(props){

    useValidSession();

    const baseUrl = props.BaseUrl;
    const history = useHistory();

    const [tripInfosInputs, setTripInfosInputs] = useState({
        name:'',
        planet: null,
        date:'',
        description:'',
        durationInDays:null
    });

    const [localInfos] = useState(getUserLocalInfos());

    const onChangeCreateTripInputs=(e)=>{
        setTripInfosInputs({
            ...tripInfosInputs, [e.target.name]: e.target.value
        })
    };

    const getCurrentDate =()=>{
        const d = new Date();
        const fixedDate = ()=>{
            let date
            switch (d.getDate()){
                case 30:
                    d.setDate(31)
                    return date = d.getDate();
                case 31:
                    d.setDate(32)
                    return date = d.getDate();
                default:
                    return date = d.getDate()+1
            }
        };
        const fixedMonth = d.getMonth()+1 < 10 ? `0${d.getMonth()+1}`:d.getMonth()+1;
        let currentDate = `${d.getFullYear()}-${fixedMonth}-${fixedDate()}`;

        return currentDate
    };

    const mountSelectDestiny=()=>{
        const destinies = ['Mercúrio','Vênus','Terra','Marte','Júpiter','Saturno',
        'Urano','Netuno','Plutão'];

        return(
            <SelectDestiny
            component='select' 
            required={true} 
            placeholder='Destino'
            name='planet'
            onChange={onChangeCreateTripInputs}
            labelId='selectLabel'
            variant='outlined'
            >
            {
                destinies.map(destiny=>{
                    return(
                    <DestinyOption
                    required={true} 
                    value={destiny}
                    key={destiny}
                    >{destiny}</DestinyOption>
                    )
                })
            }
            </SelectDestiny> 
        )
    }

    const createTrip=async()=>{
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

    const handleSubmit = e =>{
        e.preventDefault();
        
        createTrip();
    }

    return(
        <CreateTripPageContainer>
            <DialogText>Criação de Viagem</DialogText>

            <ControledCreateTripForms onSubmit={handleSubmit} component='form'>
                <CreateTripInput
                autoFocus={true}
                required={true}
                type='text'
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    pattern: "[A-Za-z ]{5,}",
                    title: "O nome da viagem deve ter no mínimo 5 letras."
                }}
                style={{
                    ':invalid':'color="tomato"'
                }}
                variant='outlined'
                margin='normal'
                label='Nome da viagem'
                placeholder='Dê um nome a sua viagem'
                name='name'
                onChange={onChangeCreateTripInputs}
                value={tripInfosInputs.name}
                />

                <ControledCreateTripForms children required={true}>
                    <SelectLabel 
                    required={true} id='selectLabel'
                    >Selecione o destino</SelectLabel>

                    {mountSelectDestiny()}
                </ControledCreateTripForms>

                <CreateTripInput
                required={true}
                type='date'
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    min: getCurrentDate(),
                    title:`É permitido apenas datas futuras à atual.`
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
                placeholder='Mínimo de 50 dias'
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
                    maxLength: 60,
                    title: "A descrição deve ter no máximo 60 caractéres"
                }}
                multiline={true}
                rows='3'
                variant='outlined'
                margin='normal'
                label='Descrição'
                placeholder='No mínimo 30 e no máximo 60 caractéres'
                name='description'
                onChange={onChangeCreateTripInputs}
                value={tripInfosInputs.description}
                />

                <SubmitButton>CRIAR VIAGEM</SubmitButton>

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