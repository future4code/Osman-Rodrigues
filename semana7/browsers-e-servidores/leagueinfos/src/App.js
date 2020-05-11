import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ChampionsSection from './components/ChampionsSection';
import SummonersSection from './components/SummonersSection';

const AppContainer = styled.main`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  
`
const AppTitle= styled.h1`

`
const SearchBar = styled.input`
  border: 1px solid black;
  width: 300px;
  
`
const SearchButton = styled.button`

`

const SectionSelect = styled.select`

`

const OptionSelect = styled.option`

`
  
class App extends React.Component{
  state={
    searchInput:'',
    searchedName:'',
    currentlySection: 'summoner'
  }

  componentDidMount(){
    
  }

  componentDidUpdate(){
    console.log(this.state.currentlySection)
    if(this.state.currentlySection === 'champion'){
      return(
        <ChampionsSection 
          SearchedInDad = {this.state.searchedName}
        />
      )
    }else{
      return(
        <SummonersSection
          currentlySection = {this.state.currentlySection}
          SearchFromDad = {this.state.searchedName}
        />
      )
    }
  }

  onChangeChampionSearch=(e)=>{
    this.setState({ searchInput: e.target.value})
  }

  onKeyDownEnter = (e) => {
    if (e.key === 'Enter'){
      this.setState({ searchedName: e.target.value })
    }
  }

  onClikSearchButton = ()=>{
    this.setState({ searchedName: this.state.searchInput })
  }

  onChangeSectionSelect=(e)=>{
    this.setState({ currentlySection: e.target.value })
  }

  render(){

    let SectionPrinted = ()=>{
      if(this.state.currentlySection === 'champion'){
        return(
          <ChampionsSection 
          SearchFromDad = {this.state.searchedName}
          />
        )
      }else if(this.state.currentlySection === 'summoner'){
        return(
          <SummonersSection
          currentlySection = {this.state.currentlySection}
          SearchFromDad = {this.state.searchedName}
          />
        )
      }
    }
    
    return (

      <AppContainer>

        <AppTitle>LeagueInfos</AppTitle>

        <SearchBar
         onChange={this.onChangeChampionSearch}
         onKeyDown={this.onKeyDownEnter}
         placeholder={'Search for Champion or Summoner name'}
        />
        
        <SearchButton onClick={this.onClikSearchButton}>Search</SearchButton>

        <SectionSelect onChange={this.onChangeSectionSelect}>

          <OptionSelect value='champion'>Champion View</OptionSelect>

          <OptionSelect value='summoner'>Summoner View</OptionSelect>

        </SectionSelect>

        {SectionPrinted()}
        
      </AppContainer>
    );
  }
  
}

export default App;
