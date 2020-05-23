import React,{} from 'react';
import axios from 'axios';
import {useHistory, useParams} from 'react-router-dom';

import {
    MyTripsPageContainer,SelectableTripsPanel,SelectedTripDetailsPanel,
    MyTripsButton,PanelHeader

} from './styles';

import {DialogText} from '../HomePage/styles'

function MyTripsPage(){

    const history = useHistory()

    return(
        <MyTripsPageContainer>
            <DialogText>Minhas Viagens</DialogText>

            <SelectableTripsPanel>
                
            </SelectableTripsPanel>

            <SelectedTripDetailsPanel>
                <PanelHeader>

                </PanelHeader>
            </SelectedTripDetailsPanel>

            <MyTripsButton
                variant="text"
                onClick={()=>{history.goBack()}}
            >
                Voltar
            </MyTripsButton>
        </MyTripsPageContainer>
    )
}

export default MyTripsPage