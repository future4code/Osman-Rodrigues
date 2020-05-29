import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import{
    convertDateInput, getUserLocalInfos, validInfosObject,
    useValidSession, useForm, getCurrentDate
} from '../../hooks/hooks';

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

    const {form, onChange, resetForm} = useForm({
        name:'',
        planet: '',
        date:'',
        description:'',
        durationInDays:''
    });
    const [localInfos] = useState(getUserLocalInfos());

    const handleInputChange=(e)=>{
        const {value, name} = e.target;

        onChange(name, value);
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
            onChange={handleInputChange}
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
    };

    const createTrip=async()=>{
        if(localInfos !== null){
            if(validInfosObject(form)=== true){
                window.alert('Solicitação enviada! Aguarde confirmação.');

                const body = {
                    name: form.name,
                    planet: form.planet,
                    date: convertDateInput(form.date),
                    description: {
                        text: form.description,
                        owner: localInfos.loggedEmail
                    },
                    durationInDays: form.durationInDays
                };
                try{
                    const response = await axios.post(`${baseUrl}/trips`,body,
                        {
                            headers:{'auth': localInfos.userToken}
                        }
                    );
                    
                    window.alert(`Viagem "${response.data.trip.name}" criada com sucesso!`);

                    resetForm();  
                }catch(e){
                    window.alert('Algo deu errado! Tente novamente mais tarde.')
                }
            }else{
                window.alert(validInfosObject(form))
            }
        }
    };

    const handleSubmit = e =>{
        e.preventDefault();

        if(form.planet === '' || form.planet === undefined){
            window.alert('O campo "Destino" está vazio!')
        }else{
            createTrip();
        }
    };
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
                variant='outlined'
                margin='normal'
                label='Nome da viagem'
                placeholder='Dê um nome a sua viagem'
                name='name'
                onChange={handleInputChange}
                value={form.name}
                />

                <ControledCreateTripForms children required={true}>
                    <SelectLabel 
                    required={true} id='selectLabel'
                    >Destino</SelectLabel>

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
                onChange={handleInputChange}
                value={form.date}
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
                onChange={handleInputChange}
                value={form.durationInDays}
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
                onChange={handleInputChange}
                value={form.description}
                />

                <SubmitButton>Criar viagem</SubmitButton>

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