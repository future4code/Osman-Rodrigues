import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

import {
    FormsPageContainer, ControledForms, QuestionInput,
    SendFormsButton, CheckBoxLabel, CheckBoxInput,
    OptionBox,CheckOptionBox
} from './styles';

import {DialogText} from '../HomePage/styles';

function ApplyFormsPage(){
    const history = useHistory();

    const [tripsList, setTripsList] = useState([]);
    const [applicantInfos, setApplicantInfos] = useState({
        name:'',
        age: null,
        applicationText:'',
        profession:'',
        country:'',
        tripsId:[]  
    });

    const onChangeInputs = (e)=>{
        e.target.value.trim() !== '' ?(
            setApplicantInfos({...applicantInfos,[e.target.name]: e.target.value })    
        ):
        window.alert('Não pode haver campos vazios no formulário!')    
    }

    const onClickCheckBox =(e)=>{
        const tripSelected = e.target.id;
        
        if(applicantInfos.tripsId.includes(tripSelected)){
            const includedTripIdIndex = applicantInfos.tripsId.indexOf(tripSelected);
            applicantInfos.tripsId.splice(includedTripIdIndex, 1);

        }else{
            applicantInfos.tripsId.push(tripSelected)
        }     
    }

    useEffect(()=>{
        axios.
        get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/osman/trips').
        then(response=>{

            setTripsList(response.data.trips)
        }).
        catch(err=>{
            window.alert('Não estamos aceitando candidatos no momento. Obrigado pela preferência!')
            history.push('/')
        })
    },[])

    return(
        <FormsPageContainer>

            <DialogText>Formulário de Candidatura</DialogText>

            <ControledForms margin="normal">
                <QuestionInput
                    required
                    type="text"
                    label="Seu nome completo"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    name='name'
                    onChange={onChangeInputs}
                    defaultValue={applicantInfos.name}
                />
                <QuestionInput
                    required
                    type="number"
                    label="Sua idade"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    name='age'
                    onChange={onChangeInputs}
                    defaultValue={applicantInfos.age}
                />
                <QuestionInput
                    required
                    type="text"
                    label="Profissão atual"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    name='profession'
                    onChange={onChangeInputs}
                    defaultValue={applicantInfos.profession}
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
                    onChange={onChangeInputs}
                    defaultValue={applicantInfos.country}
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
                    margin="normal"
                    name='applicationText'
                    onChange={onChangeInputs}
                    defaultValue={applicantInfos.applicationText}
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
                        <h3>Carregando viagens disponíveis...</h3>   
                    }
                </CheckBoxInput>
                
            </ControledForms>

            <SendFormsButton
            variant="outlined"
            onClick={()=>{console.log(applicantInfos)}}
            >
                Enviar Candidatura
            </SendFormsButton>
        </FormsPageContainer>
    )
}

export default ApplyFormsPage