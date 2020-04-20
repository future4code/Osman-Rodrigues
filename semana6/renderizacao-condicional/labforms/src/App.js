import React from 'react';
import styled from 'styled-components'
/* import InputForms from './components/InputForms' */
import SelectForms from './components/SelectForms'
import SendForms from './components/SendForms'
import Season1 from './components/Season1'

const AppView = styled.main `
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {

  }
  render(){
    return (
      <AppView>
        <Season1
        
        />
        
      </AppView>
    );
  }
}

export default App;
