import React from 'react';
import styled from 'styled-components'
import Season1 from './components/Season1'
import Season2 from './components/Season2'
import Season3 from './components/Season3'
import SendForms from './components/SendForms'

const AppView = styled.main `
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    actualSection: 'SEC1'

  }

  toSection2 = () =>{
    this.setState({actualSection: 'SEC2'})
    console.log(this.state.actualSection)
  }
  toSection3 = () =>{
    this.setState({actualSection: 'SEC3'})
    console.log(this.state.actualSection)
  }
  toSection4 = () =>{
    this.setState({actualSection: 'SEC4'})
    console.log(this.state.actualSection)
  }
  render(){
      switch (this.state.actualSection){
        
        case 'SEC2':
          return(
            <AppView>
              <Season2/>
              <SendForms
                ButtonName = 'Próxima Etapa'
                OnSubmit = {this.toSection3} 
              />
            </AppView>
          )
        case 'SEC3':
          return(
            <AppView>
              <Season3/>
              <SendForms
                ButtonName = 'Finalizar Formulário'
                OnSubmit = {this.toSection4} 
              />
            </AppView>
          )
          case 'SEC4':
          return(
            <AppView>
             <h2>Formulário Enviado!</h2>
             <p>Obrigado por sua submissão! Nós entraremos em contato.</p>
            </AppView>
          ) 
        default:
          return(
            <AppView>
              <Season1/>
              <SendForms
                ButtonName = 'Próxima Etapa'
                OnSubmit = {this.toSection2} 
              />
            </AppView>
          )
      }
  }
}

export default App;
