import {useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export const getUserLocalInfos=()=>{
    return JSON.parse(localStorage.getItem('userLoggedInfos'))
};

export const setUserLocalInfos=(dataObject)=>{
    localStorage.setItem("userLoggedInfos", JSON.stringify(dataObject))
};

export const useValidSession =()=>{
    const history = useHistory();
    const localInfos = getUserLocalInfos();
    if(
        localInfos === null ||
        localInfos.loggedIn !== true
    ){  
        window.alert('Sessão expirada!')
        history.replace('/login')
    }
};

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
};

export const validInfosObject = (infosObject)=>{
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