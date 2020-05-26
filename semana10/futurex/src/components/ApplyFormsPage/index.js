import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'

import {
    FormsPageContainer, ControledForms, QuestionInput,
    SendFormsButton, CheckBoxLabel, CheckBoxInput,
    OptionBox,CheckOptionBox,Logo
} from './styles';

import {DialogText} from '../HomePage/styles';

import FuturexLogo from '../../pics/futurex-nave-icon.png';

function ApplyFormsPage(props){
    const adminKey = props.AdminKey
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
        setApplicantInfos({...applicantInfos,[e.target.name]: e.target.value })   
    };

    const onClickCheckBox =(e)=>{
        const tripSelected = e.target.id;
        
        if(applicantInfos.tripsId.includes(tripSelected)){
            const includedTripIdIndex = applicantInfos.tripsId.indexOf(tripSelected);
            applicantInfos.tripsId.splice(includedTripIdIndex, 1);

        }else{
            applicantInfos.tripsId.push(tripSelected)
        }     
    };

    const onClickSubmitInfos = ()=>{
        if(applicantInfos.tripsId.length !== 0 && applicantInfos.age >= 18){
            applicantInfos.tripsId.forEach(tripId=>{
                const body = {
                    name: applicantInfos.name,
                    age: applicantInfos.age,
                    applicationText: applicantInfos.applicationText,
                    profession: applicantInfos.profession,
                    country: applicantInfos.country, 
                }
                axios.
                    post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${
                        adminKey
                    }/trips/${
                        tripId
                    }/apply`, body,).
                    then(response=>{
                        window.alert(`Candidatura registrada com sucesso!`);

                        setApplicantInfos({
                            name:'',
                            age: '',
                            applicationText:'',
                            profession:'',
                            country:'',
                            tripsId:[]
                        })
                    }).
                    catch(err=>{
                    window.alert(err)
                    })
            })
        }else if(applicantInfos.age < 18){
            window.alert('Candidatura proibida para menores de 18 anos!')
        }
        else{
            window.alert('Candidatura não registrada! Verifque se há algum campo não preenchido corretamente.')
        } 
    };

    useEffect(()=>{
        axios.
        get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${
            adminKey
        }/trips`).
        then(response=>{
            setTripsList(response.data.trips)
        }).catch(err=>{
            window.alert('No momento não estamos aceitando candidaturas. Obrigado pela preferência!')
            history.push('/')
        })
    },[]);

    return(
        <FormsPageContainer>

            <Logo
            onClick={()=>{history.push('/')}}
            src={FuturexLogo}
            />

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
                    value={applicantInfos.name}
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
                    value={applicantInfos.age}
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
                    value={applicantInfos.profession}
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
                    value={applicantInfos.country}
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
                    value={applicantInfos.applicationText}
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