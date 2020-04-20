import React from 'react';
import styled from 'styled-components'

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const SelectLabel = styled.label` 

`
const SelectArea = styled.select`

`
const SelectOption = styled.option`

`

export class SelectForms extends React.Component{
    state = {

    }

    render(){
        return(
            <SelectContainer>
                <SelectLabel>{this.props.Quest}</SelectLabel>
                <SelectArea>
                    <SelectOption>{this.props.Option1}</SelectOption>
                    <SelectOption>{this.props.Option2}</SelectOption>
                    <SelectOption>{this.props.Option3}</SelectOption>
                    <SelectOption>{this.props.Option4}</SelectOption>
                </SelectArea>
            </SelectContainer> 
        )
    }
}

export default SelectForms