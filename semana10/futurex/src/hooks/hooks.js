import {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


export const getCountriesList = async()=>{
    const response = await axios.get('https://restcountries.eu/rest/v2/all');

    return response.data
};

export const useForm= (initialValues) =>{
    const [form, setForm] = useState(initialValues);

    const onChange = (name, value)=>{
        const newForm = {...form, [name]: value};
        setForm(newForm)
    };

    const resetForm =()=>{
        setForm(initialValues)
    };

    return {form, onChange, resetForm}
};

export const postApplyToTrip = async(baseUrl, applicantInfos, tripsList)=>{
    const body = {
        name: applicantInfos.name,
        age: applicantInfos.age,
        applicationText: applicantInfos.applicationText,
        profession: applicantInfos.profession,
        country: applicantInfos.country, 
    };

    applicantInfos.tripsId.forEach(async tripId=>{
        let tripName
        tripsList.forEach(trip=>{
            if(trip.id === tripId){
                tripName = trip.name
            }
        }); 

        try{
            await axios.post(`${baseUrl}/trips/${tripId}/apply`, body,);

            window.alert(`Candidatura para "${
                tripName
            }" registrada com sucesso!`);
        }catch(e){
            window.alert('Algo deu errado. Candidatura não registrada!')
        };
    })
};

export const getCurrentDate =()=>{
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

export const useGetUserTrips=(baseUrl, localInfos)=>{
    const [myTripsList, setMyTripsList] = useState([]);

    useEffect(()=>{
        axios.
        get(`${baseUrl}/trips`). 
        then(response=>{
            const allTripsList = response.data.trips;
            
            allTripsList.forEach(trip => {
                if(typeof(trip.description) === 'object' && localInfos.loggedEmail !== null){
                    if(trip.description.owner === localInfos.loggedEmail){
                        setMyTripsList(allTripsList)
                    }
                }
            });
        })
    }, []);

    return myTripsList
};

export const deleteTrip = async(baseUrl, selectedTrip)=>{
    const confirmDelete = window.confirm(`Confirmar exclusão de '${selectedTrip.name}?'`)
    if(confirmDelete === true){
        try{
            await axios.delete(`${baseUrl}/trips/${selectedTrip.id}`); 
            window.alert(`'${selectedTrip.name}' foi excluída!`);
        }catch(e){
            window.alert('Algo deu errado! Exclusão cancelada.')
        }
    }else{
        window.alert('Exclusão cancelada.')
    }
};

export const getTripApplicants= async(baseUrl,localInfos,selectedTrip)=>{
    try{
        const response = await axios.get(
            `${baseUrl}/trip/${selectedTrip.id}`,{headers:{auth:localInfos.userToken}});
        const allTripApplicants={
            candidates: response.data.trip.candidates,
            approved: response.data.trip.approved
        };
        return allTripApplicants
    }catch(e){
        window.alert(`Não foi possível coletar os candidatos de ${selectedTrip.name}` )
        const allTripApplicants={
            candidates: [],
            approved: []
        };
        return allTripApplicants
    } 
};

export const putApproveApplicant = async(baseUrl,localInfos,selectedApplicant,selectedTrip)=>{
    const confirmApprove = window.confirm(`Confirmar aprovação de ${selectedApplicant.name} em "${selectedTrip.name}"?`)
    if(confirmApprove===true){
        try{
            const body = {approve: true}

            await axios.put(`${baseUrl}/trips/${
                selectedTrip.id
            }/candidates/${
                selectedApplicant.id
            }/decide`, body,{headers:{auth:localInfos.userToken}});

            window.alert(`${selectedApplicant.name} aprovado(a)`)

            window.location.reload()
        }catch(e){
            window.alert(e.response.data.message)
        }
    }else{
        window.alert('Aprovação cancelada.')
    }     
};

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

//Fiz para validar os objetos do forms antes da aula de validação de forms e deixei
//para ser analisado
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