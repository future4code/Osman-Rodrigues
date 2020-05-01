import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Login from './components/Login';
import UsersView from './components/UsersView';

const AppContainer = styled.main`
  /* @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap'); */
  margin: 0;
  width: 100vw;
  height: 100vh;
  /* font-family: 'Roboto', sans-serif; */
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
`

class App extends React.Component{

  state={
    loggedIn: false,
  }

  onClickLog = () =>{
    this.setState({ loggedIn: ! this.state.loggedIn })
  }

  render(){

    return (
      <AppContainer>
        
       {this.state.loggedIn ?
       <UsersView
        onClickLogoff = {this.onClickLog}
        />
       :
       <Login 
        onClickLogin = {this.onClickLog}
        dataFromParent = {this.state.loggedIn}
        />
      }

      </AppContainer>
    );
  }  
}

export default App;
