import React,{useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

import {
    CreateTripPageContainer, ControledCreateTripForms,
    CreateTripInput, CreateTripButton
} from './styles';

import {DialogText} from '../HomePage/styles';

export const convertDateInput =(dateInput)=>{
    if(dateInput.includes('-')){
        const charIndex = dateInput.indexOf('-');
        const strLen = dateInput.length;
        let convertedDate ;
        
        if(charIndex === 4){
            convertedDate = 
            `${
                dateInput[strLen-2]+dateInput[strLen-1]
            }/${
                dateInput[strLen-5]+dateInput[strLen-4]
            }/${
                dateInput[strLen-strLen]+dateInput[strLen-9]+dateInput[strLen-8]+dateInput[strLen-7]
            }`
            return convertedDate
        }
    }
}

function CreateTripPage(props){

    const adminKey = props.AdminKey;
    const history = useHistory();
    const pathParams = useParams();

    const [tripInfosInputs, setTripInfosInputs] = useState({
        name:'',
        planet:'',
        date:'',
        description:'',
        durationInDays:''
    });

    const [localInfos, setLocalInfos] = useState(JSON.parse(
        localStorage.getItem('userLoginInfo')
    ));
    
    convertDateInput(tripInfosInputs.date)

    const validInfosObject = (infosObject)=>{
            let objectLeng = 0;
            let emptyInfos = 0;

            for(let info in infosObject ){
                if(infosObject[info].trim() === ''){
                    emptyInfos += 1 
                };
                objectLeng += 1;
            }
            return(
                emptyInfos > 0? 
                (false, `${emptyInfos} de ${objectLeng} info(s) solicitada(s) vazia(s)!`):  
                true
            )
    };

    const onChangeCreateTripInputs=(e)=>{
        setTripInfosInputs({
            ...tripInfosInputs, [e.target.name]: e.target.value
        })
    };

    const onClickCreateTrip=()=>{
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
                
                axios.
                post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${
                    adminKey
                }/trips`, body,{
                    headers:{
                        'auth': pathParams.userToken
                    }
                }).
                then(response=>{
                    window.alert(`Viagem "${response.data.trip.name}" criada com sucesso!`);

                    setTripInfosInputs({
                        name:'',
                        planet:'',
                        date:'',
                        description:'',
                        durationInDays:''
                    });
                }).
                catch(err=>{
                    window.alert('Algo deu errado! Tente novamente mais tarde.')
                })
    
            }else{
                window.alert(validInfosObject(tripInfosInputs))
            }
        }else{
            window.alert('Sessão expirada! Faça login novamente.')
            history.replace('/login')
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