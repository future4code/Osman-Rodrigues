import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SummonersSectionBox = styled.section`
    border-radius: 8px;
    border: 1px solid black;
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

class SummonersSection extends React.Component{
    state={
        currentlySection: '',
        nameSearchedInDad:'',
        summonerInfos:{
            "id": "2FrzQebAyyZoPDpdiHn89xoPP1KDpvl5ofdEMPZGQNlvkg",
            "accountId": "d2gSzntXVpzs-OZidhGtl2jJ-NL4j-0dXwWTqJIEOM71TuM",
            "puuid": "K9nI8uZu_Qt7wvu5bEZjt8YQXemLNZeDDiKYbCj2oHF2gMhpr-HMzJRleTVCSYbAx1xhBPpBZNNv3w",
            "name": "Bagage",
            "profileIconId": 4375,
            "revisionDate": 1588284512000,
            "summonerLevel": 223
        },
        masteryzedChampionsDescending:[{
            "championId": 77,
            "championLevel": 7,
            "championPoints": 130907,
            "lastPlayTime": 1583027080000,
            "championPointsSinceLastLevel": 109307,
            "championPointsUntilNextLevel": 0,
            "chestGranted": false,
            "tokensEarned": 0,
            "summonerId": "zw3NArzaxein1W37O129yFZY3ABL4NdkD6UEzfsNe9Imfw"
        }],
        championsList: []
    }

    componentDidMount(){
        //if(this.state.currentlySection === 'summoner'){
            axios.get('http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion.json').then(response=>{
        
                let championsObjects = response.data.data   

                for(let champion in championsObjects ){
                    this.state.championsList.push(championsObjects[champion])

                    //this.state.championsList.push(champion)
                }

                }).catch(error=>{
                    window.alert(error)
                })
    }
    //}

    componentDidUpdate(prevProps){

        if(this.props.SearchFromDad !== prevProps.SearchFromDad){
            this.setState({ nameSearchedInDad: this.props.SearchFromDad })
            this.setState({ currentlySection: this.props.currentlySection })
        }
    }

    render(){

        let summonerInfosConstructor = ()=>{
            const summonerInfos = this.state.summonerInfos
            /* if(this.state.currentlySection === 'summoner'){
                axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.state.nameSearchedInDad}`,{
                headers:{
                    'X-Riot-Token':'RGAPI-6036544e-2609-4599-8350-bc24145629e5'
                }
                }).then(response=>{
                    console.log(response)
                }).catch(error=>{
                    
                })
            } */

            for(let info in summonerInfos){
                
                return(
                    <div>
                        <h3>{summonerInfos.name}</h3>
                        <h4>{summonerInfos.summonerLevel}</h4>
                        <h4>{summonerInfos.profileIconId}</h4>
                    </div>
                )
            }
        }
        let summonerChampionsMastery = ()=>{
            const championsMastery = this.state.masteryzedChampionsDescending;
            const championsList = this.state.championsList
            let matchedChampions = []

            championsMastery.forEach(masteryzedChampion=>{
                console.log(typeof(masteryzedChampion.championId))
                let matchedChampion = championsList.filter(champion=>{
                    console.log(typeof(champion.key))
                    return Number(champion.key) === masteryzedChampion.championId
                })

                matchedChampions = matchedChampion
                console.log(matchedChampions) //Champions matched in filter validated
            })
            
        }
        //console.log(this.state.championsList)
        summonerChampionsMastery()
        return(
            <SummonersSectionBox>

                <h2>Summoner Result</h2>

                {summonerInfosConstructor()}
                
            </SummonersSectionBox>
        )
    }
}

export default SummonersSection