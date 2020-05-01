import React from 'react';
import axios from 'axios';
//import championsList from 'http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion.json'


  

class App extends React.Component{
  state={
    championsList:[],
    championsNames:[],
    searchedName:''
  }

  componentDidMount(){
    axios.get('http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion.json').then(response=>{
    

    this.setState({championsList: response.data.data})
    console.log(this.state.championsList)

    for(let champion in this.state.championsList ){
      this.state.championsNames.push(champion)
    }
    console.log(this.state.championsNames)

    }).catch(error=>{
      console.log(error)
    })
  }

  componentDidUpdate(){
    //console.log(this.state.championsNames)
  }

  onChangeChampionSearch=(e)=>{
    this.setState({ searchedName: e.target.value})
  }
  render(){

    const ChampionsList = this.state.championsNames.filter(championName=>{
      return championName.includes(this.state.searchedName)
    })

    console.log(ChampionsList)
    
    return (

      <div className="App">

        <input onChange={this.onChangeChampionSearch}></input>

        <div>{ChampionsList}</div>
        
      </div>
    );
  }
  
}

export default App;
