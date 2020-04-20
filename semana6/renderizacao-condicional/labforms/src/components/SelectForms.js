import React from 'react';
import styled from 'styled-components'

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
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
                <SelectArea onChange ={this.props.SelectOnChange} value ={this.props.SelectValue}>
                    <SelectOption value={this.props.ValueOption1}>{this.props.Option1}</SelectOption>
                    <SelectOption value ={this.props.ValueOption2}>{this.props.Option2}</SelectOption>
                    <SelectOption value={this.props.ValueOption3}>{this.props.Option3}</SelectOption>
                    <SelectOption value={this.props.ValueOption4}>{this.props.Option4}</SelectOption>
                </SelectArea>
            </SelectContainer> 
        )
    }
}

export default SelectForms