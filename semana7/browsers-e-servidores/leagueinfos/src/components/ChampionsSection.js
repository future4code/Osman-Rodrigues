import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ChampionsSectionBox = styled.section`
    border-radius: 8px;
    border: 1px solid black;
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    
     
`
const ChampionImage = styled.img`
    border-radius: 8px;
    width: 600px;
    height: 400px;
    
`
const ChampionInfos = styled.div`

`

const Tag = styled.b`
    border: 1px solid black;
    border-radius: 10px;
    background-color: black;
    color: white;
    margin-right: 10px;
    
`

const Description = styled.p`
    
    text-align: justify;
    
    
`

class ChampionsSection extends React.Component{
    state={
        nameSearchedInDad:'',
        championsList:[],
        championsNames:[],
    }
    componentDidMount(){
        axios.get('http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion.json').then(response=>{

        this.setState({championsList: response.data.data})
        
        for(let champion in this.state.championsList ){
            this.state.championsNames.push(champion)
        }

        }).catch(error=>{
            window.alert(error)
        })
    }

    componentDidUpdate(prevProps){

        if(this.props.SearchFromDad !== prevProps.SearchFromDad){
            this.setState({ nameSearchedInDad: this.props.SearchFromDad })
        }
    }

    componentWillUnmount(prevProps){
        this.setState({ nameSearchedInDad: prevProps })
    }


    render(){

        let ChampionConstructor = () =>{
            const champions = this.state.championsList;
            const championName = this.state.nameSearchedInDad;
            let championAcessed = champions[championName];

            if(championAcessed !== undefined){
                const roleplayInfos = championAcessed.info
                const basicStats = championAcessed.stats

                const infosConstructor = (obj)=>{
                    let key = []
                    let value = []
                    let infos = []
                    for(let info in obj){
                        key.push(info)
                        value.push(obj[info])
                        infos.push(`${info}: ${obj[info]}`)
                    }

                    return(
                        infos.map(info =>{
                            return <Tag>{info.toUpperCase()}</Tag>
                        })
                    )
                }
                
                return( 
                    <ChampionInfos>

                        <p><b>{championAcessed.name}</b>, {championAcessed.title}</p>

                        <p>Role: {championAcessed.tags.map(mastery =>{ 
                            return <Tag>{mastery}</Tag>
                            })} 
                        </p>

                        <p>
                            {infosConstructor(roleplayInfos)}
                        </p>

                        <Description>
                            <h4>Description</h4>
                            {championAcessed.blurb}
                        </Description>

                        <ChampionImage src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`} />
                    </ChampionInfos>
                )
            }
        }

        let ViewValidator = ()=>{
            if(this.state.nameSearchedInDad.trim() === ''){
               return <p>No results.</p>
            }else if(this.state.championsNames.includes(this.state.nameSearchedInDad)){
                return ChampionConstructor();
            }else{
                return <p>Champion not found.</p>
            }
        }
    
        return(
            <ChampionsSectionBox>
                
                <h2>Champion Result</h2>
                
                {ViewValidator()}
               
            </ChampionsSectionBox>
        )
    }
}

export default ChampionsSection