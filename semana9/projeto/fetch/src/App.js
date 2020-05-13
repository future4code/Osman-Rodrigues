import React, {useState} from 'react';
import styled from 'styled-components';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

import LoginSection from './components/LoginSection/LoginSection';

const myTheme = createMuiTheme({
  palette:{
    primary:{main: '#A30000'},
    secondary:{main: '#f5f5f5'},
  },
})

const AppContainer = styled.main`
  border: 1px solid red;
  height: 100%;
  min-width: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`

function App() {

  const [currentSection, setCurrentSection] = useState("LOGIN")

  return (
    <MuiThemeProvider theme={myTheme}>

      <AppContainer>

        <LoginSection
        
        />

      </AppContainer>

    </MuiThemeProvider>
    
  );
}

export default App;
