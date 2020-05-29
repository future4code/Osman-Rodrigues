import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import {postApplyToTrip, useForm, getCountriesList} from '../../hooks/hooks'

import {
    FormsPageContainer, ControledForms, QuestionInput,
    SendFormsButton, CheckBoxLabel, CheckBoxInput,
    OptionBox,CheckOptionBox,Logo
} from './styles';

import '../../AppStyles.css'

import {DialogText} from '../HomePage/styles';

import FuturexLogo from '../../pics/futurex-nave-icon.png';

function ApplyFormsPage(props){
    const baseUrl = props.BaseUrl;
    const history = useHistory();

    getCountriesList();
    
    const [tripsList, setTripsList] = useState([]);
    const {form, onChange, resetForm} = useForm({
        name:'',
        age: null,
        applicationText:'',
        profession:'',
        country:'',
        tripsId:[]  
    });

    const handleInputChange =(e)=>{
        const {name, value} = e.target;

        onChange(name, value)
    };

    const onClickCheckBox =(e)=>{
        const tripSelected = e.target.id;
        
        if(form.tripsId.includes(tripSelected)){
            const includedTripIdIndex = form.tripsId.indexOf(tripSelected);
            form.tripsId.splice(includedTripIdIndex, 1);

        }else{
            form.tripsId.push(tripSelected)
        }     
    };

    const onClickSubmitInfos = async()=>{
        if(form.tripsId.length !== 0 && form.age >= 18){
            await postApplyToTrip(baseUrl, form, tripsList);

            resetForm();

        }else if(form.age < 18){
            window.alert('Candidatura proibida para menores de 18 anos!')
        }
        else{
            window.alert('Candidatura não registrada! Verifque se há algum campo não preenchido corretamente.')
        } 
    };

    useEffect(()=>{
        axios.
        get(`${baseUrl}/trips`).
        then(response=>{
            setTripsList(response.data.trips)
        }).catch(err=>{
            window.alert('No momento não estamos aceitando candidaturas. Obrigado pela preferência!')
            history.push('/')
        });
    },[]);

    return(
        <FormsPageContainer>

            <Logo
            onClick={()=>{history.push('/')}}
            src={FuturexLogo}
            />

            <DialogText>Formulário de Candidatura</DialogText>

            <ControledForms component='form'>
                <QuestionInput
                    required
                    type="text"
                    label="Seu nome completo"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        pattern:'[A-Z][A-Za-a ]{2,}',
                        title:'Nome deve começar com letra maiúscula e ter no mínimo 3 letras'
                    }}
                    margin="normal"
                    name='name'
                    onChange={handleInputChange}
                    value={form.name}
                />
                <QuestionInput
                    required
                    type="number"
                    label="Sua idade"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        min:18,
                        title:'Idade mínima premitida: 18 anos'
                    }}
                    margin="normal"
                    name='age'
                    onChange={handleInputChange}
                    value={form.age}
                />
                <QuestionInput
                    required
                    type="text"
                    label="Profissão atual"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        pattern:'[A-Z][A-Za-a ]{9,}',
                        title:'Profissão deve ter no mínimo 10 letras'
                    }}
                    margin="normal"
                    name='profession'
                    onChange={handleInputChange}
                    value={form.profession}
                />
                <QuestionInput
                    required
                    type="text"
                    label="País"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    name='country'
                    onChange={handleInputChange}
                    value={form.country}
                />
                <QuestionInput
                    required
                    multiline={true}
                    rows="5"
                    type="text"
                    label="Por que você quer ingressar em uma viagem interestelar?"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        maxLength: 60,
                        title:'O texto deve ter no mínimo 30 e no máximo 60 caractéres'
                    }}
                    margin="normal"
                    name='applicationText'
                    onChange={handleInputChange}
                    value={form.applicationText}
                />

                <CheckBoxInput margin="normal">
                    <CheckBoxLabel required component="legend">Selecione até duas viagens que deseje ingressar</CheckBoxLabel>
                    {
                        tripsList.length !== 0 ?(
                            tripsList.map(trip =>{
                                return(
                                    <OptionBox
                                        control={
                                            <CheckOptionBox
                                                onClick={onClickCheckBox}
                                                name={trip.name}
                                                id={trip.id}
                                            />
                                        }
                                        label={`${trip.name} (${trip.planet})`}
                                    />
                                )
                            })
                        ):
                        <h3>Buscando viagens disponíveis...</h3>   
                    }
                </CheckBoxInput>
                
            </ControledForms>

            <SendFormsButton
            variant="outlined"
            onClick={onClickSubmitInfos}
            >
                Enviar Candidatura
            </SendFormsButton>
        </FormsPageContainer>
    )
}

export default ApplyFormsPage